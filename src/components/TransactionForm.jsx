import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { useForm } from "../Hooks/useForm";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};

export const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const fields = [
    {
      label: "Type",
      placeholder: "",
      required: true,
      type: "text",
      name: "name",
    },
    {
      label: "title",
      placeholder: "Salary",
      required: true,
      type: "text",
      name: "title",
      value: form.title,
    },
    {
      label: "amount",
      placeholder: "100",
      required: true,
      type: "number",
      name: "amount",
      value: form.amount,
    },
    {
      label: "Transaction Date",

      required: true,
      type: "date",
      name: "tdate",
      value: form.tdate,
    },
  ];
  return (
    <div className="border rounded p-4">
      <h3 className="mb-5 text-center ">Add New Transaction!</h3>{" "}
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="div d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
