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
import { Auth } from "./auth/Auth";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="/dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />
          <Route
            path="/loancalculator"
            element={
              <Auth>
                <Loancalculator />
              </Auth>
            }
          />
          <Route
            path="/transactions"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/logout"
            element={
              <Auth>
                <Logout />
              </Auth>
            }
          />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
