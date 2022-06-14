import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./pages/Booking/Booking/Booking";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Firebase/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking/:bookingId" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
