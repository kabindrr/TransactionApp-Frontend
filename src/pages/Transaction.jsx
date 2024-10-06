import { Col, Container, Row } from "react-bootstrap";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionTable } from "../components/TransactionTable";

export const Transaction = () => {
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
