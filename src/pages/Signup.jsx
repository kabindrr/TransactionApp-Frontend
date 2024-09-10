import { Col, Container, Row } from "react-bootstrap";
import { FinancialTips } from "../components/FinancialTips";
import { SignUpForm } from "../components/SignUpForm";

export const Signup = () => {
  return (
    <>
      <Container className="p-5">
        <Row className="bg-dark p-5 rounded shadow">
          <Col md={6}>
            <FinancialTips />
          </Col>
          <Col md={6}>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
