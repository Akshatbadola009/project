import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllDoctors from "./pages/AllDoctors";
import Medicine from "./pages/Medicine";
import Prescription from "./pages/Prescription";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<AllDoctors />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
