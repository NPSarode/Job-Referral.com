import React, { useEffect } from "react";
import { Button, Form, FormFeedback, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { register as onRegister } from "../../store/actions";

import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Register2 = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.authReducer);

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
      dispatch(onRegister(values));
      validation.resetForm();
    },
  });

  useEffect(() => {
    if (data) {
      withReactContent(Swal).fire({
        title: <i>Register Successfull</i>,
        inputValue: "",
        icon: "success",
        timer: 3000,
        heightAuto: false,
        showConfirmButton: false,
      });
      Navigate("/");
    }
  }, [dispatch, data, Navigate]);

  return (
    <div className="mainLogin">
      <div className="loginImage">
        <h4>Welcome to Get Your Referrer</h4>
        <p>
          Take charge of your job search by connecting with trusted referrers
          who can open doors to new opportunities. Request a referrer today and
          unlock your path to career success!
        </p>
      </div>
      <div className="loginForm">
        <h1>Register</h1>
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
          <Button className="text-success border border-success mt-3" color="success">
            Register
          </Button>
        </Form>
        <div className="mt-2 text-center registerFooter">
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="fw-medium text-success">
              {" "}
              Sign in{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register2;
