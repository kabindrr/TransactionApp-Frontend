import { Col, Container, Row } from "react-bootstrap";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionTable } from "../components/TransactionTable";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { CustomModal } from "../components/CustomModal";

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
            <CustomModal>
              <TransactionForm />
            </CustomModal>

            <hr />
            <TransactionTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};
