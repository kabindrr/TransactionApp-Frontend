import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FcMoneyTransfer } from "react-icons/fc";
import { CustomInput } from "../components/CustomInput";
import { Form } from "react-router-dom";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { SignInForm } from "../components/SignInForm";

export const Login = () => {
  return (
    <>
      <Container className="p-5">
        <Row className="bg-dark p-5 rounded shadow">
          <Col md={6}>
            <SignInForm />
          </Col>
          <Col md={6}>
            <div
              className="d-flex flex-column justify-content-center "
              style={{ height: "100%" }}
            >
              <div className="text-center p-5 " style={{ fontSize: "1.3rem" }}>
                <FcMoneyTransfer
                  className="text-success"
                  style={{ fontSize: "10rem" }}
                />
              </div>

              <div
                className="text-center text-success p-2"
                style={{ fontSize: "1.3rem" }}
              >
                {" "}
                <BsGraphUpArrow className="text-success" /> Let your Money Grow
              </div>
              <div
                className="text-center text-decoration-line-through"
                style={{ fontSize: "1.3rem" }}
              >
                {" "}
                <BsGraphDownArrow className="text-warning " /> Watch Your
                Spending
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
