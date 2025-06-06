import React from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'

const SwalAlert = ({status, message}) => {
  return withReactContent(Swal).fire({
    title: <i>{"message"}</i>,
    inputValue: "",
    icon: "success",
    timer: 2000,
    heightAuto: false,
    showConfirmButton: false,
  });
};

export {SwalAlert};
