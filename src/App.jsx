import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import "./App.css";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import { Logout } from "./pages/Logout";
import { Dashboard } from "./pages/Dashboard";
import { Transaction } from "./pages/Transaction";
import { Loancalculator } from "./pages/Loancalculator";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loancalculator" element={<Loancalculator />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
