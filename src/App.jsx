import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Auth Pages
const LoginPage = lazy(() => import("./components/auth&registration/LoginPage"));
const RegisterPage = lazy(() => import("./components/auth&registration/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("./components/auth&registration/ForgotPasswordPage"));
const ConfirmationCode = lazy(() => import("./components/auth&registration/ConfirmationCode"));
const NewPassword = lazy(() => import("./components/auth&registration/NewPassword"));

// Common
const MainLayout = lazy(() => import("./components/common/MainLayout"));
const Footer = lazy(() => import("./components/common/Footer"));
// Home
const HomePage = lazy(() => import("./components/homepage/HomePage"));
const NewArrivals = lazy(() => import("./components/homepage/NewArrivals"));
const NewsletterSection = lazy(() => import("./components/homepage/NewsletterSection"));

// Shop
const ShopPage = lazy(() => import("./components/shop/ShopPage"));
const ProductDetail = lazy(() => import("./components/shop/ProductDetail"));
const ShoppingCart = lazy(() => import("./components/shop/ShoppingCart"));
const CheckoutPage = lazy(() => import("./components/shop/CheckoutPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Routes>
          {/* Auth Pages (AuthLayout უკვე თავისით მართავს UI-ს) */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/confirmation-code" element={<ConfirmationCode />} />
          <Route path="/submit" element={<NewPassword />} />

          {/* Main Pages */}
          <Route
            path="/home"
            element={
              <>
                <HomePage />
                <NewArrivals />
                <NewsletterSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <MainLayout>
                <ShopPage />
              </MainLayout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <MainLayout>
                <ProductDetail />
              </MainLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <ShoppingCart />
              </MainLayout>
            }
          />
          <Route
            path="/checkout"
            element={
              <MainLayout>
                <CheckoutPage />
              </MainLayout>
            }
          />

          {/* 404 */}
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
