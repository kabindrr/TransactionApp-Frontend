import { Button, Form, Toast } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";

export const SignUpForm = () => {
  const [form, setForm] = useState({});

  const fields = [
    {
      label: "Name",
      placeholder: "John Smith",
      required: true,
      type: "text",
      name: "name",
    },
    {
      label: "Email",
      placeholder: "johnsmith@gmail.com",
      required: true,
      type: "email",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "************",
      required: true,
      type: "password",
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "************",
      required: true,
      type: "password",
      name: "confirmPassword",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password Do Not Match", {
        theme: "dark",
      });
    }
  };

  return (
    <div className="border rounded p-4">
      <h3 className="mb-5 text-center ">Sign Up Now</h3>{" "}
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
