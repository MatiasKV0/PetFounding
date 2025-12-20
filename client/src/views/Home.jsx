import { useState } from "react";

function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">Refugio de Esperanza</h1>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Brindamos amor y cuidado a animales que necesitan un hogar
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => onNavigate("pets")} className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50">
              Ver Mascotas
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600">
              Donar
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">1,250+</h3>
            <p className="text-gray-600">Animales Rescatados</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">980+</h3>
            <p className="text-gray-600">Adopciones Exitosas</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Voluntarios</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login({ onNavigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Bienvenido</h1>
          <p className="text-amber-100">Refugio de Animales</p>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="Ingresa tu usuario"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-lg hover:from-amber-600 hover:to-orange-600">
              Iniciar Sesión
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <span onClick={() => onNavigate("register")} className="text-amber-600 font-medium cursor-pointer hover:text-amber-500">
                Regístrate
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Register({ onNavigate }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Crear Cuenta</h1>
          <p className="text-amber-100">Únete a nuestra comunidad</p>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-lg">
              Registrarse
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <span onClick={() => onNavigate("login")} className="text-amber-600 font-medium cursor-pointer">
                Inicia sesión
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pets({ onNavigate }) {
  const pets = [
    { id: 1, name: "Luna", type: "Perro", age: "2 años", status: "Disponible" },
    { id: 2, name: "Max", type: "Gato", age: "1 año", status: "Disponible" },
    { id: 3, name: "Bella", type: "Perro", age: "3 años", status: "En proceso" },
    { id: 4, name: "Simba", type: "Gato", age: "6 meses", status: "Disponible" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Nuestras Mascotas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{pet.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                    {pet.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-1">{pet.type}</p>
                <p className="text-gray-500 text-sm mb-4">{pet.age}</p>
                <button onClick={() => onNavigate("details")} className="w-full bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Details({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <button onClick={() => onNavigate("pets")} className="mb-6 flex items-center text-amber-600 font-semibold">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver
        </button>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-96 bg-gradient-to-br from-amber-200 to-orange-200"></div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Luna</h1>
              <p className="text-gray-600 text-lg mb-6">Perro • 2 años</p>
              <p className="text-gray-600 mb-6">
                Luna es una perrita adorable y cariñosa. Le encanta jugar y es perfecta para familias.
              </p>
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-4 rounded-lg">
                Solicitar Adopción
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white">
            <h1 className="text-3xl font-bold">Juan Pérez</h1>
            <p className="text-amber-100">Voluntario</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-amber-50 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-amber-600">12</p>
                <p className="text-gray-600">Voluntariados</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-green-600">5</p>
                <p className="text-gray-600">Adopciones</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-blue-600">$500</p>
                <p className="text-gray-600">Donaciones</p>
              </div>
            </div>
            <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold">
              Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Panel de Administración</h1>
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-600 mb-4">Total Mascotas</h3>
            <p className="text-3xl font-bold text-gray-800">42</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-600 mb-4">Adopciones</h3>
            <p className="text-3xl font-bold text-gray-800">28</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-600 mb-4">En Proceso</h3>
            <p className="text-3xl font-bold text-gray-800">8</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-gray-600 mb-4">Voluntarios</h3>
            <p className="text-3xl font-bold text-gray-800">15</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Acciones Rápidas</h2>
          <button className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold mb-3">
            Añadir Nueva Mascota
          </button>
          <button className="w-full border-2 border-gray-300 py-3 rounded-lg font-semibold">
            Ver Cola de Adopción
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");

  const views = {
    home: <Home onNavigate={setView} />,
    login: <Login onNavigate={setView} />,
    register: <Register onNavigate={setView} />,
    pets: <Pets onNavigate={setView} />,
    details: <Details onNavigate={setView} />,
    profile: <Profile />,
    dashboard: <Dashboard />
  };

  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span onClick={() => setView("home")} className="text-xl font-bold text-gray-800 cursor-pointer">
              🐾 Refugio
            </span>
            <div className="flex gap-4">
              <button onClick={() => setView("home")} className="text-gray-600 hover:text-amber-600 font-medium">Inicio</button>
              <button onClick={() => setView("pets")} className="text-gray-600 hover:text-amber-600 font-medium">Mascotas</button>
              <button onClick={() => setView("dashboard")} className="text-gray-600 hover:text-amber-600 font-medium">Admin</button>
              <button onClick={() => setView("profile")} className="text-gray-600 hover:text-amber-600 font-medium">Perfil</button>
              <button onClick={() => setView("login")} className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      {views[view]}
    </div>
  );
}