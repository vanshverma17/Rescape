import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import TripForm from "./pages/TripForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trip" element={<TripForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
