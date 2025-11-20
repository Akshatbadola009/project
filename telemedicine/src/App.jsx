import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import BookAppointment from "./pages/BookAppointment";
import Medicines from "./pages/Medicines";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/book/:id" element={<BookAppointment />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
