import "./App.css";
import { Route, Routes } from "react-router";
import React, { useEffect, useState } from "react";
import AuthProtected from "./pages/Common/AuthProtected";
import NonProtected from "./pages/Common/NonProtected";

import { authProtectedRoutes, publicRoutes } from "./routes/index";
import Spinner from "./pages/Common/Spinner";
import { axiosApi } from "./helper/ApiHelper";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axiosApi.interceptors.request.use(
      (config) => {
        setLoader(true);
        return config;
      },
      (error) => {
        setLoader(false);
        return Promise.reject(error);
      }
    );

    axiosApi.interceptors.response.use(
      (config) => {
        setLoader(false);
        return config;
      },
      (error) => {
        setLoader(false);
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <>
      <Spinner show={loader} />
      <Routes>
        {authProtectedRoutes.map((route, key) => (
          <Route
            path={route.path}
            element={<AuthProtected>{route.component}</AuthProtected>}
            key={key}
            exact={true}
          />
        ))}

        {publicRoutes.map((route, key) => (
          <Route
            path={route.path}
            element={<NonProtected>{route.component}</NonProtected>}
            key={key}
            exact={true}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
