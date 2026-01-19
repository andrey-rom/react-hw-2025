import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { ThemeProvider } from "./contexts/ThemeContext";
import AuthInitializer from "./components/AuthInitializer/AuthInitializer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";
import "@fontsource/inter";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <AuthInitializer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route
                path="/order"
                element={
                  <ProtectedRoute>
                    <OrderPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AuthInitializer>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

