import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import LeftBar from './Components/LeftBar/LeftBar';
import RightBar from './Components/RightBar/RightBar';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './Styles.scss';
import { useContext } from "react";
import {DarkModeContext} from './Context/darkModeContext'
import { AuthContext } from "./Context/AuthContext";


function App() {
  const {darkMode} = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="./Login" />
    }
    return children;

  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    }
    ,
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
