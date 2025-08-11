import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./i18n";

// Import Pages/Components
import App from "./App"; // This is your public-facing site
import AdminLogin from "./pages/AdminLogin"; // We will create this
import AdminDashboard from "./pages/AdminDashboard"; // We will create this
import ProtectedRoute from "./components/ProtectedRoute"; // We will create this

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Route for the main website */}
        <Route path="/" element={<App />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin" // The main admin route
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        {/* Optional: Add a specific dashboard route if you plan more admin pages */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
