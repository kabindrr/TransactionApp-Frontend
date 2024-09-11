import { Button, Form } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { postNewUser } from "../helpers/userAxios";
import { useForm } from "../Hooks/useForm";

const initialState = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const { handleOnChange, form, setForm } = useForm(initialState);
  // const [form, setForm] = useState({});

  const fields = [
    {
      label: "Email",
      placeholder: "johnsmith@gmail.com",
      required: true,
      type: "email",
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      placeholder: "************",
      required: true,
      type: "password",
      name: "password",
      value: form.password,
    },
  ];

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="border rounded p-4">
      <h3 className="mb-5 text-center ">Keep Track Of Your Finances</h3>{" "}
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
