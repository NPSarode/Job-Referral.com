import React from "react";
import { Container } from "reactstrap";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = ({ show = false }) => {
  return (
    <Container fluid className="p-0">
      {show && (
        <div className="d-flex justify-content-center align-items-center bg-dark bg-opacity-75" style={{minHeight:'100vh'}}>
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}
    </Container>
  );
};

export default Spinner;
