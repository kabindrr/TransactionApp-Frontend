import React, { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { useForm } from "../Hooks/useForm";
import { postTransaction } from "../helpers/transactionAxios";
import { toast } from "react-toastify";

const initialState = {
  type: "",
  title: "",
  amount: "",
  tdate: "",
};

export const TransactionForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const pending = postTransaction(form);
    toast.promise(pending, {
      pending: "please wait ....",
    });
    const { status, message } = await pending;
    toast[status](message);
    status === "success" && setForm(initialState);

    //call the function to fetch all transactions
  };
  const fields = [
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Transaction Type</Form.Label>
          <Form.Select name="type" onChange={handleOnChange} required>
            <option value="">-- Select --</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Form.Group>

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
