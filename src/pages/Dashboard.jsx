import { Col, Container, Row } from "react-bootstrap";
import MyBarChart from "../components/BarChart.jsx";

import { useUser } from "../context/UserContext.jsx";
import { useEffect } from "react";
import { FaArrowDown, FaArrowUp, FaBalanceScale } from "react-icons/fa";
import MyPieChart from "../components/PieChart.jsx";
// import { NeedleChart } from "../components/NeedleChart.jsx";

export const Dashboard = () => {
  const { transactions, getTransactions } = useUser();

  useEffect(() => {
    getTransactions();
  }, []);

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expenses")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  const summaryCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "120px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: "15px",
    transition: "transform 0.2s",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "30px 0",
        }}
      >
        <div
          style={{
            ...summaryCardStyle,
            backgroundColor: "rgba(54, 162, 235, 0.7)",
          }}
        >
          <FaBalanceScale
            size={30}
            style={{ marginBottom: "10px", color: "#fff" }}
          />
          <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>
            Total Balance
          </div>
          <div style={{ fontSize: "1.5em" }}>
            ${totalBalance.toLocaleString()}
          </div>
        </div>
        <div
          style={{
            ...summaryCardStyle,
            backgroundColor: "green",
          }}
        >
          <FaArrowUp
            size={30}
            style={{ marginBottom: "10px", color: "#fff" }}
          />
          <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>Income</div>
          <div style={{ fontSize: "1.5em" }}>
            ${totalIncome.toLocaleString()}
          </div>
        </div>
        <div
          style={{
            ...summaryCardStyle,
            backgroundColor: "red",
          }}
        >
          <FaArrowDown
            size={30}
            style={{ marginBottom: "10px", color: "#fff" }}
          />
          <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>Expenses</div>
          <div style={{ fontSize: "1.5em" }}>
            ${totalExpenses.toLocaleString()}
          </div>
        </div>
      </div>
      <Container className="p-5">
        <Row className="bg-dark p-5 rounded shadow">
          {/* dashboard update with balance */}

          {/* dashboard with income and expenses graph */}
          <Col>
            <MyBarChart />
          </Col>
          <Col>
            <MyPieChart />
          </Col>
        </Row>
      </Container>
    </>
  );
};
