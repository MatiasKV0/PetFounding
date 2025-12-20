import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../../features/auth/authSlice";
import { useLoginUserMutation } from "../../api/authApi";

export default function Login() {

  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await loginUser({ username, password }).unwrap();
      localStorage.setItem('authToken', result.token);
      dispatch(login({ user: result.user, role: result.role }));
      navigate('/perfil');
    } catch (err) {
      console.error("Fallo al iniciar sesión:", err);
      setError(err.data?.message || 'Error al iniciar sesión. Verifica tus credenciales.');
    }
  }

  return (
    <>
      <main>
        <h1>Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" className="border" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" name="password" className="border" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Login</button>
        </form>
        <div className="mt-3">
          ¿No tienes una cuenta? <Link to="/register" className="text-blue-500 underline">Registrate</Link>
        </div>
      </main>
    </>
  )
}
