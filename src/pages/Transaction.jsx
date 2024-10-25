import { Col, Container, Row } from "react-bootstrap";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionTable } from "../components/TransactionTable";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";

export const Transaction = () => {
  const { getTransactions } = useUser();
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <>
      <Container className="p-5">
        <Row className="bg-dark p-5 rounded shadow">
          <Col>
            <TransactionForm />
            <hr />
            <TransactionTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};
