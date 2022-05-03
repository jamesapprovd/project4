import React from "react";
// routes
import { Routes, Route, Navigate } from "react-router-dom";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";

// layouts
import DashboardLayout from "./layouts/dashboard";
import DashboardApp from "./pages/DashboardApp";
//
import Clients from "./pages/Clients";
// import Login from "./pages/Login";
import NotFound from "./pages/Page404";
// import Register from "./pages/Register";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      {/* <ThemeProvider />
    <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<DashboardApp />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/clients" element={<Clients />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/dashboard/app" />} />
      </Routes>
    </>
  );
};

export default App;
