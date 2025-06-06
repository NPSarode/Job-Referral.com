import React from "react";
import { Navigate } from "react-router-dom";

// Protected
import Profile from "../pages/Profile/Profile2";
import Summary from "../pages/JobSummary/Summary";
// import Users from "../pages/Configuration/Users/Users";
import WorkInProgress from "../pages/WorkInProgress";
// Public
// import Login from "../pages/Authentication/Login";
// import Register from "../pages/Authentication/Register";
import Login2 from "../pages/Authentication/Login2";
import Register2 from "../pages/Authentication/Register2";


const authProtectedRoutes = [
  { path: "/profile", component: <Profile /> },
  { path: "/joblist", component: <Summary /> },
  { path: "/users", component: <WorkInProgress /> },
  

  {
    path: "/",
    exact: true,
    component: < Navigate to="/joblist" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login2 /> },
  { path: "/register", component: <Register2 /> },
  {
    path: "/",
    exact: true,
    component: < Navigate to="/login" />,
  },
  
];

export { authProtectedRoutes, publicRoutes };
