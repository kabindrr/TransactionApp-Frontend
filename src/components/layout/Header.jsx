import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa6";

import { useUser } from "../../context/UserContext";

export const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleOnLogout = (e) => {
    e.preventDefault();
    //1. On logout click delete "accessjwt " token from the localstorage
    localStorage.removeItem("jwtToken");

    //2. reset user obj from the state
    setUser({});
    //3.  redirect user to the login page.
    navigate("/login");
  };

  return (
    <Navbar expand="lg " variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo3.png"
            style={{ width: "300px", height: "auto" }}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* updating navbar if its login or logout condition */}
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <IoHome /> Dashboard
                </Link>
                <Link className="nav-link" to="/loancalculator">
                  <FaCreditCard /> Loancalculator
                </Link>
                <Link className="nav-link" to="/transactions">
                  <GiReceiveMoney /> Transactions
                </Link>
                <Link
                  onClick={handleOnLogout}
                  className="nav-link"
                  to="/logout"
                >
                  <RiLogoutBoxLine /> Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  <RiLoginBoxLine /> Login
                </Link>

                <Link className="nav-link" to="/signup">
                  <GiArchiveRegister /> Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
