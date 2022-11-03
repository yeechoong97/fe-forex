import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Screens/ErrorPage';
import { Login } from './Screens/Login';
import Main from './Screens/Main';
import Register from './Screens/Register';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />
  }
]);

const App = () => {
  return (
    <div className='w-screen h-screen bg-slate-200 items-center justify-center flex'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
