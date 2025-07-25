import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import TripForm from "./pages/TripForm";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trip" element={<TripForm />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
