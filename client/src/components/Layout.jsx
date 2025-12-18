import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Layout() {
  
  const dispatch = useDispatch();

  const state = useSelector((state) => state.auth);
  const isAuthenticated = state.isAuthenticated;
  const userRole = state.role;

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">

      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
       
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <span>🐾</span> PetFounding
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-500 transition-colors">Inicio</Link>
            <Link to="/pets" className="hover:text-blue-500 transition-colors">Mascotas</Link>
            <Link to="/shelters" className="hover:text-blue-500 transition-colors">Refugios</Link>

            {isAuthenticated && userRole === "shelter" && (
              <>
                <Link to="/my-pets" className="text-blue-600 font-semibold border-l pl-8 border-gray-200">
                  Panel Refugio
                </Link>
                <Link to="/create-pet" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Publicar Mascota
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link to="/profile" className="text-sm font-medium border-b border-transparent hover:border-blue-500">
                  Mi Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-md transition-colors"
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 shadow-md transition-all"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50/50">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-4">PetFounding</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Conectando corazones con patitas. La plataforma líder para la adopción
                responsable y apoyo a refugios locales.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900 mb-2">Comunidad</h4>
              <Link to="/about" className="text-sm text-gray-600 hover:text-blue-500">Sobre nosotros</Link>
              <Link to="/donations" className="text-sm text-gray-600 hover:text-blue-500">Donaciones</Link>
              <Link to="/volunteers" className="text-sm text-gray-600 hover:text-blue-500">Voluntariado</Link>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-900 mb-2">Contacto</h4>
              <p className="text-sm text-gray-600 italic">hola@petfounding.com</p>
              <div className="flex gap-4 mt-2">
                <span className="cursor-pointer text-gray-400 hover:text-blue-400">Instagram</span>
                <span className="cursor-pointer text-gray-400 hover:text-blue-400">Facebook</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} PetFounding. Hecho con ❤️ para los animales.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <Link to="/terms" className="hover:underline">Términos</Link>
              <Link to="/privacy" className="hover:underline">Privacidad</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}