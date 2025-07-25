import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TripForm from "./pages/TripForm";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { useEffect } from "react";

// Wrapper to access location
function AppWrapper() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/signin" || location.pathname === "/signup";

  useEffect(() => {
    window.scrollTo(0, 0); // Optional: scroll to top on route change
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbarAndFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/trip" element={<TripForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
