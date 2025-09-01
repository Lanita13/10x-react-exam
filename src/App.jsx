import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const LoginPage = lazy(() => import("./components/auth&registration/LoginPage"));
const RegisterPage = lazy(() => import("./components/auth&registration/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("./components/auth&registration/ForgotPasswordPage"));
const ConfirmationCode = lazy(() => import("./components/auth&registration/ConfirmationCode"));
const NewPassword = lazy(() => import("./components/auth&registration/NewPassword"));
const HomePage = lazy(() => import("./components/homepage/HomePage"));
const NewArrivals = lazy(() => import("./components/homepage/NewArrivals"));
const NewsletterSection = lazy(() => import("./components/homepage/NewsletterSection"));
const ShopPage = lazy(() => import("./components/shop/ShopPage"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/confirmation-code" element={<ConfirmationCode />} />
          <Route path="/submit" element={<NewPassword />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={
            <>
              <HomePage />
              <NewArrivals />
              <NewsletterSection />
            </>
          } />

          <Route path="/shop" element={<ShopPage />} />

          <Route
            path="*"
            element={
              <div className="p-6 text-center text-2xl font-bold">
                404 | Page not found
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
