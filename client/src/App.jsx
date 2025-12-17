import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//views
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import UserProfile from './views/Profile.jsx';
import CatalogoMascotas from './views/mascotas/CatalogoMascotas.jsx';
import DetalleMascota from './views/mascotas/DetalleMascota.jsx';
import Refugios from './views/refugio/Refugios.jsx';
import DetalleRefugio from './views/refugio/DetalleRefugio.jsx';

//admin views
import AdminDashboard from './views/admin/Dashboard.jsx';
import PetABM from './views/admin/PetABM.jsx';
import AdoptionQueue from './views/admin/AdoptionQueue.jsx';

//components
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import Layout from './components/Layout.jsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // 1. RUTAS PÚBLICAS
      { index: true, element: <Home /> },
      { path: 'catalogo', element: <CatalogoMascotas /> },
      { path: 'mascotas/:id', element: <DetalleMascota /> },
      { path: 'refugios', element: <Refugios /> },
      { path: 'refugios/:id', element: <DetalleRefugio /> },
      { path: 'login', element: <Login /> },
      
      // 2. RUTAS PRIVADAS
      {
        path: 'perfil',
        element: <ProtectedRoute><UserProfile /></ProtectedRoute>,
      },

      // 3. RUTAS DE ADMINISTRACIÓN
      {
        path: 'admin',
        element: <AdminRoute roles={['Refugio', 'Admin']}><AdminDashboard /></AdminRoute>,
        children: [
            { path: 'mascotas/abm', element: <PetABM /> }, 
            { path: 'solicitudes', element: <AdoptionQueue /> },
        ]
      },
      
      { path: '*', element: <div>404: Página no encontrada</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;