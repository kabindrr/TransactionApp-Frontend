import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
