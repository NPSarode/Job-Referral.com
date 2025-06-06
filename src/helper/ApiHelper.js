import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

axiosApi.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");


  export async function registerUser(url, data, config = {}) {
    return axiosApi.post(url, { ...data }, { ...config }).then((response) => {
      if (response.data.success) {
        return response.data.message;
      }
  
      withReactContent(Swal).fire({
        title: <i>{response.data.message}</i>,
        inputValue: "",
        icon: "error",
        timer: 2000,
        heightAuto: false,
        showConfirmButton: false,
      });
    });
  }

  export async function loginUser(url, data, config = {}) {
    return axiosApi.post(url, { ...data }, { ...config }).then((response) => {
      if (response.data.success) {
        return response.data;
      }
  
      withReactContent(Swal).fire({
        title: <i>{response.data.message}</i>,
        inputValue: "",
        icon: "error",
        timer: 2000,
        heightAuto: false,
        showConfirmButton: false,
      });
    });
  }

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err?.response?.data) {
        withReactContent(Swal).fire({
          title: <i>{err.response.data.message}</i>,
          inputValue: "",
          icon: "error",
          timer: 2000,
          heightAuto: false,
          showConfirmButton: false,
        });
        return err.response.data;
      } else {
        withReactContent(Swal).fire({
          title: <i>Oops Something Went Wrong</i>,
          inputValue: "",
          icon: "error",
          timer: 2000,
          heightAuto: false,
          showConfirmButton: false,
        });
        return [];
      }
    });
}

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => {
    if (response.data.success) {
      return response.data.data;
    }

    withReactContent(Swal).fire({
      title: <i>{response.data.message}</i>,
      inputValue: "",
      icon: "error",
      timer: 2000,
      heightAuto: false,
      showConfirmButton: false,
    });
  });
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => {
    if (response.data.success) {
      return response.data.data;
    }

    withReactContent(Swal).fire({
      title: <i>{response.data.message}</i>,
      inputValue: "",
      icon: "error",
      timer: 2000,
      heightAuto: false,
      showConfirmButton: false,
    });
  });
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => {
    if (response.data.success) {
      return response.data.data;
    }

    withReactContent(Swal).fire({
      title: <i>{response.data.message}</i>,
      inputValue: "",
      icon: "error",
      timer: 2000,
      heightAuto: false,
      showConfirmButton: false,
    });
  });
}
