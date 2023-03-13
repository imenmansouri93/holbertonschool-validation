import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <div>Home Page</div>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])


  return (
    <>
    <RouterProvider router= {router}/>
    </>
  );
}

export default App;
