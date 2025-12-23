import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useState } from "react";

export default function Layout() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const isAuthenticated = state.isAuthenticated;
  const userRole = state.role;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

  const handleNavigation = (path) => {
    window.location.href = path;
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="sticky top-0 z-50 w-full bg-gray-800 border-b border-gray-700 shadow-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src="/img/image.png" alt="PetFounding logo" className="w-10 h-10 md:w-12 md:h-12" />
            <span className="hidden md:block text-2xl font-bold text-white">
              PetFounding
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button onClick={() => handleNavigation("/")} className="hover:text-white transition-colors">
              Inicio
            </button>
            <button onClick={() => handleNavigation("/pets")} className="hover:text-white transition-colors">
              Mascotas
            </button>
            <button onClick={() => handleNavigation("/shelters")} className="hover:text-white transition-colors">
              Refugios
            </button>

            {isAuthenticated && userRole === "shelter" && (
              <>
                <button
                  onClick={() => handleNavigation("/my-pets")}
                  className="text-orange-600 font-semibold border-l pl-8 border-gray-600 hover:text-orange-500 transition-colors"
                >
                  Panel Refugio
                </button>
                <button
                  onClick={() => handleNavigation("/create-pet")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg"
                >
                  Publicar Mascota
                </button>
              </>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavigation("/donations")}
              className="bg-orange-600 text-white px-5 py-2 rounded-full
                         text-sm font-semibold shadow-md
                         hover:bg-orange-700 hover:scale-105
                         transition-all duration-300"
            >
              Doná ahora
            </button>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleNavigation("/profile")}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Mi Perfil
                </button>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-400 hover:bg-red-900/30 px-3 py-1.5 rounded-md transition-colors"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavigation("/login")}
                className="text-orange-600 font-semibold border-l pl-6 border-gray-600 hover:text-orange-500 transition-colors"
              >
                Iniciar Sesión
              </button>
            )}
          </div>


          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>


        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <button
                onClick={() => handleNavigation("/")}
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg text-left transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavigation("/pets")}
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg text-left transition-colors"
              >
                Mascotas
              </button>
              <button
                onClick={() => handleNavigation("/shelters")}
                className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg text-left transition-colors"
              >
                Refugios
              </button>

              {isAuthenticated && userRole === "shelter" && (
                <>
                  <button
                    onClick={() => handleNavigation("/my-pets")}
                    className="text-orange-600 hover:text-orange-500 hover:bg-gray-700 px-4 py-2 rounded-lg text-left font-semibold transition-colors border-t border-gray-700 pt-4 mt-2"
                  >
                    Panel Refugio
                  </button>
                  <button
                    onClick={() => handleNavigation("/create-pet")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg text-left"
                  >
                    Publicar Mascota
                  </button>
                </>
              )}

              <button
                onClick={() => handleNavigation("/donations")}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all shadow-lg mt-2"
              >
                Doná ahora
              </button>

              {isAuthenticated ? (
                <div className="border-t border-gray-700 pt-4 mt-2 flex flex-col gap-3">
                  <button
                    onClick={() => handleNavigation("/profile")}
                    className="text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg text-left transition-colors"
                  >
                    Mi Perfil
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:bg-red-900/30 px-4 py-2 rounded-lg text-left transition-colors"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation("/login")}
                  className="text-orange-600 hover:text-orange-500 hover:bg-gray-700 px-4 py-2 rounded-lg text-left font-semibold transition-colors border-t border-gray-700 pt-4 mt-2"
                >
                  Iniciar Sesión
                </button>
              )}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                PetFounding
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conectando corazones con patitas. La plataforma líder para la
                adopción responsable y apoyo a refugios locales.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-white mb-2">Comunidad</h4>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors text-left"
              >
                Sobre nosotros
              </button>
              <button
                onClick={() => handleNavigation("/donations")}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors text-left"
              >
                Donaciones
              </button>
              <button
                onClick={() => handleNavigation("/volunteers")}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors text-left"
              >
                Voluntariado
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-white mb-2">Desarrolladores</h4>
              <a
                href="https://www.linkedin.com/in/matias-nicolas-villan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="hidden sm:inline">Matías Nicolás Villán</span>
                <span className="sm:hidden">M. Villán</span>
              </a>
              <a
                href="https://www.linkedin.com/in/camila-lázaro-ávila"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="hidden sm:inline">Camila Agustina Lázaro Ávila</span>
                <span className="sm:hidden">C. Lázaro</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} PetFounding. Hecho con ❤️ para los
              animales.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <button onClick={() => handleNavigation("/terms")} className="hover:text-blue-400 transition-colors">
                Términos
              </button>
              <button onClick={() => handleNavigation("/privacy")} className="hover:text-blue-400 transition-colors">
                Privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}