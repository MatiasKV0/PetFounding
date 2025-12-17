import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>

    <header className="pt-5 justify-center w-full bg-blue-500 text-white text-center">
      <h1>PetFounding</h1>
      <nav>
        <a href="/">Inicio</a> |{" "}
        <a href="/mascotas">Mascotas</a> |{" "}
        <a href="/refugios">Refugios</a> |{" "}
        <a href="/login">Iniciar Sesión</a>
      </nav>
      <br/>
    </header>

    <main className="bg-blue-100 min-h-screen p-4 text-center"> 
      <Outlet />
    </main>

    <footer className="text-center p-5">
      <p>© 2026 PetFounding. Todos los derechos reservados.</p>
    </footer>
    
    </>
  )
}
