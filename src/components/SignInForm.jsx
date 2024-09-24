import { Button, Form } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginUser, postNewUser } from "../helpers/userAxios";
import { useForm } from "../Hooks/useForm";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const { handleOnChange, form } = useForm(initialState);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    //while loding showing promise insted of toast
    const pendingState = loginUser(form);
    toast.promise(pendingState, {
      pending: "Please wait....",
    });

    const { status, message, user, jwtToken } = await loginUser(form);

    toast[status](message);
    console.log(user, jwtToken);
    setUser(user);

    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("userInfo", JSON.stringify(user));
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
