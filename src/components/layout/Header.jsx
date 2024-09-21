import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa6";

export const Header = () => {
  return (
    <Navbar expand="lg " variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">Financial Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/dashboard">
              <IoHome /> Dashboard
            </Link>
            <Link className="nav-link" to="/dashboard">
              <FaCreditCard /> Loancalculator
            </Link>
            <Link className="nav-link" to="/transactions">
              <GiReceiveMoney /> Transactions
            </Link>
            <Link className="nav-link" to="/login">
              <RiLoginBoxLine /> Login
            </Link>
            <Link className="nav-link" to="/logout">
              <RiLogoutBoxLine /> Logout
            </Link>
            <Link className="nav-link" to="/signup">
              <GiArchiveRegister /> Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
