import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark p-5 ">
        <Row className="text-center">
          <Col>&copy; Copy Right All Reserved. || Made by Kabindra</Col>
        </Row>
      </Container>
    </div>
  );
};
