import "./App.css";
import { useState, useEffect } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import AboutView from "./pages/AboutView";
// import HomeView from "./pages/HomeView";
// import NotFoundView from "./pages/NotFoundView";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import NavbarTailwind from "./components/Navbar/NavbarTailwind";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <NotFoundView />,
//   },
//   {
//     path: "/about",
//     element: <AboutView />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },
// ]);

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token)
//   });

//   return (
//     <RouterProvider Router={Router}/>
//   )
// }

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated && <NavbarTailwind onLogout={handleLogout}/>}

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
