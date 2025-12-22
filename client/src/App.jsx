import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';

import Home from './views/Home.jsx';
import UserProfile from './views/Profile.jsx';
import Pets from './views/pets/Pets.jsx';
import DetailsPets from './views/pets/Details.jsx';
import Shelter from './views/shelter/Shelter.jsx';
import DetailsShelter from './views/shelter/Details.jsx';
import Donations from './views/shelter/Donations.jsx';

//auth views
import Register from './views/auth/Register.jsx';
import Login from './views/auth/Login.jsx';

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
      { path: 'pets', element: <Pets /> },
      { path: 'pets/:id', element: <DetailsPets /> },
      { path: 'shelters', element: <Shelter /> },
      { path: 'shelters/:id', element: <DetailsShelter /> },
      { path: 'donations', element: <Donations /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      
      // 2. RUTAS PRIVADAS
      {
        path: 'profile',
        element: <ProtectedRoute><UserProfile /></ProtectedRoute>,
      },

      // 3. RUTAS DE ADMINISTRACIÓN
      {
        path: 'admin',
        element: <AdminRoute roles={['Refugio', 'Admin']}><AdminDashboard /></AdminRoute>,
        children: [
            { path: 'pets/abm', element: <PetABM /> }, 
            { path: 'adoption', element: <AdoptionQueue /> },
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