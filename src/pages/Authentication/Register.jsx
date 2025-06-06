import React from "react";
import { Button, Form, FormFeedback, Input, Label } from "reactstrap";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const Navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      type: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Username"),
      email: Yup.string()
        .required("Please Enter Your Email")
        .matches(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/, "Invalid email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}/register`, values, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => response.data)
        .catch((err) => {})
        .then((data) => {
          if (data.success) {
            withReactContent(Swal).fire({
              title: <i>Register Successfull</i>,
              inputValue: "",
              icon: "success",
              timer: 3000,
              heightAuto: false,
              showConfirmButton: false,
            });

            Navigate("/");
          } else {
            withReactContent(Swal).fire({
              title: <i>{data.message}</i>,
              inputValue: "",
              icon: "error",
              timer: 3000,
              heightAuto: false,
              showConfirmButton: false,
            });
          }
        });
      validation.resetForm();
    },
  });

  return (
    <div className="myForm d-flex justify-content-center align-items-center flex-column">
      <div>
        <div className="d-flex ">
          <h2>Register</h2>
        </div>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            validation.submitForm();
            return false;
          }}
        >
          <div className="form-group">
            <Label for="username">Username</Label>
            <Input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.username || ""}
              invalid={
                validation.touched.username && validation.errors.username
                  ? true
                  : false
              }
            />
            {validation.touched.username && validation.errors.username ? (
              <FormFeedback type="invalid">
                {validation.errors.username}
              </FormFeedback>
            ) : null}
          </div>
          <div className="form-group">
            <Label for="email">Email</Label>
            <Input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.email || ""}
              invalid={
                validation.touched.email && validation.errors.email
                  ? true
                  : false
              }
            />
            {validation.touched.email && validation.errors.email ? (
              <FormFeedback type="invalid">
                {validation.errors.email}
              </FormFeedback>
            ) : null}
          </div>
          <div className="form-group">
            <Label for="password">Password</Label>
            <Input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.password || ""}
              invalid={
                validation.touched.password && validation.errors.password
                  ? true
                  : false
              }
            />
            {validation.touched.password && validation.errors.password ? (
              <FormFeedback type="invalid">
                {validation.errors.password}
              </FormFeedback>
            ) : null}
          </div>
          <Button className="mt-3" color="info">Sign Up</Button>
        </Form>

        <div className="mt-2 text-center">
          <p>
            Already have an account ?{" "}
            <Link to="/" className="fw-medium text-info">
              {" "}
              Login{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
