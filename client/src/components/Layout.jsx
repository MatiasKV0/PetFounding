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
    <div className="flex flex-col min-h-screen font-sans">
   <header className="sticky top-0 z-50 w-full bg-gray-800 border-b border-gray-700 shadow-xl">
     <div className="container mx-auto px-4 h-16 flex items-center justify-between">

       <Link
         to="/"
         className="text-2xl font-bold text-white flex items-center gap-2 hover:text-gray-300 transition-colors"
       >
         <img src="/img/image.png" alt="PetFounding logo" className="w-12 h-12" />
         PetFounding
       </Link>

       <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
         <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
         <Link to="/pets" className="hover:text-white transition-colors">Mascotas</Link>
         <Link to="/shelters" className="hover:text-white transition-colors">Refugios</Link>

         {isAuthenticated && userRole === "shelter" && (
           <>
             <Link
               to="/my-pets"
               className="text-orange-600 font-semibold border-l pl-8 border-gray-600 hover:text-orange-500 transition-colors"
             >
               Panel Refugio
             </Link>
             <Link
               to="/create-pet"
               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg"
             >
               Publicar Mascota
             </Link>
           </>
         )}
       </nav>

       <div className="flex items-center gap-4">

         <Link
           to="/donations"
           className="bg-orange-600 text-white px-5 py-2 rounded-full
                      text-sm font-semibold shadow-md
                      hover:bg-orange-700 hover:scale-105
                      transition-all duration-300"
         >
           Doná ahora
         </Link>

         {isAuthenticated ? (
           <div className="flex items-center gap-3">
             <Link
               to="/profile"
               className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
             >
               Mi Perfil
             </Link>
             <button
               onClick={handleLogout}
               className="text-sm text-red-400 hover:bg-red-900/30 px-3 py-1.5 rounded-md transition-colors"
             >
               Salir
             </button>
           </div>
         ) : (
           <Link
             to="/login"
             className="text-orange-600 font-semibold border-l pl-6 border-gray-600 hover:text-orange-500 transition-colors"
           >
             Iniciar Sesión
           </Link>
         )}
       </div>

     </div>
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
              <Link
                to="/about"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Sobre nosotros
              </Link>
              <Link
                to="/donations"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Donaciones
              </Link>
              <Link
                to="/volunteers"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                Voluntariado
              </Link>
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
                            Matías Nicolás Villán
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
                Camila Agustina Lázaro Ávila
              </a>
                      </div>
                        </div>


          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} PetFounding. Hecho con ❤️ para los
              animales.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
                Términos
              </Link>
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}