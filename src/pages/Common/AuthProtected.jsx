import React from 'react'
import { Navbar } from './Navbar'
import { Navigate } from 'react-router-dom'

const AuthProtected = (props) => {
  if(localStorage.getItem("token")) {
    return (
      <>
      <Navbar />
      <div>{props.children}</div>
      {/* <Footer title={"Nikhil sarode"} tech={"MERN"}/> */}
      </>
    )
  } else {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }}></Navigate>
    )
  }
}

export default AuthProtected 
