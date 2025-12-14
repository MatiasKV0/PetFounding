import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home.jsx';
import PetCatalog from './features/mascotas/CatPets.jsx';
import PetDetail from './features/mascotas/PetDetail.jsx';
import DonationForm from './features/donaciones/DonationForm.jsx';
import UserProfile from './features/auth/Profile.jsx';
import AdminDashboard from './features/admin/Dashboard.jsx';
import PetABM from './features/admin/PetABM.jsx';
import AdoptionQueue from './features/admin/AdoptionQueue.jsx';
import Login from './features/auth/Login.jsx';

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
      { path: 'catalogo', element: <PetCatalog /> },
      { path: 'mascotas/:id', element: <PetDetail /> },
      { path: 'donar', element: <DonationForm /> },
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