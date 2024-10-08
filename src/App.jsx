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
import { useEffect } from "react";
import { autoLogin } from "./utils/users";
import { useUser } from "./context/UserContext";

const App = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    !user?._id && updateUser();
  }, [user?._id]);

  const updateUser = async () => {
    const user = await autoLogin();
    setUser(user);
  };
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
