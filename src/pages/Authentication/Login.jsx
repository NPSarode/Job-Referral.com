import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormFeedback, Input, Label } from "reactstrap";
import loginImage from '../../assets/loginImage.png'

import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { 
  login as onLogin 
} from '../../store/actions'
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'

const Login = () => {

  const dispatch = useDispatch()
  const { data } = useSelector(state => state.authReducer)
  
  const Navigate = useNavigate()
  
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      
      dispatch(onLogin(values, Navigate))
      
      validation.resetForm();
    },
  });

  useEffect(()=>{
    if(data) {
      withReactContent(Swal).fire({
        title: <i>Login Successfull</i>,
        inputValue: "",
        icon: "success",
        timer: 2000,
        heightAuto: false,
        showConfirmButton: false,
      });
    }
  },[data])

  return (
    <div className="myForm d-flex justify-content-center align-items-center flex-column">
      <div>
        <div className="loginImage">
          <img src={loginImage} alt="" />
        </div>
        <div className="d-flex ">
          <h2>Login</h2>
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
          <Button color="info">Sign In</Button>
        </Form>

        <div className="mt-2 text-center">
          <p>
            Don&#39;t have an account ?{" "}
            <Link to="/register" className="fw-medium text-info">
              {" "}
              Register{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
