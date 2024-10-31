import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

export const Loancalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = (e) => {
    e.preventDefault();
    const monthlyRate = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const payment =
      (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    setMonthlyPayment(payment.toFixed(2));
  };
  return (
    <>
      <Container className="p-5">
        <Row className="bg-dark p-5 rounded shadow">
          <div className="border rounded p-4">
            <h3 className="mb-4 text-center">Loan Calculator</h3>
            <Form onSubmit={calculateLoan}>
              <Form.Group className="mb-3">
                <Form.Label>Loan Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter loan amount"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Interest Rate (%)</Form.Label>
                <Form.Control
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="Enter interest rate"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Loan Term (years)</Form.Label>
                <Form.Control
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="Enter loan term in years"
                  required
                />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Calculate
                </Button>
              </div>
            </Form>
            {monthlyPayment > 0 && (
              <div className="mt-4 text-center">
                <h5>Estimated Monthly Payment: ${monthlyPayment}</h5>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};
