import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Booking from "./pages/Booking/Booking/Booking";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/booking/:bookingId"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
