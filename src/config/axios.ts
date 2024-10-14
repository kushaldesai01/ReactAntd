import axios, { AxiosResponse } from "axios";
import { Notification } from "../components/Notification";
import { API_URL } from "../variables/apiURL";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: API_URL.BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("token");
    config.headers.Accept = "application/json";
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data?.message && response.config.showToast) {
      if (Array.isArray(response.data.message)) {
        response.data.message.map((msg: string) =>
          Notification.success({
            message: msg,
          })
        );
      } else {
        Notification.success({
          message: response.data.message,
        });
      }
    }
    return response;
  },
  (error) => {
    if (error.status === 500) {
      Notification.error({
        message: "Internal server error",
      });
      localStorage.clear();
      return Promise.reject(error);
    }
    if (error.status === 401) {
      Notification.error({
        message: "Unauthorized",
      });
      localStorage.clear();
      Cookies.remove("token");
      window.location.href = "/";
      return Promise.reject(error);
    }
    if (error?.response?.data?.message) {
      if (Array.isArray(error?.response?.data?.message)) {
        error?.response?.data?.message.map((err: string) =>
          Notification.error({
            message: err,
          })
        );
      } else {
        Notification.error({
          message: error?.response?.data?.message,
        });
      }
      return Promise.reject(error);
    }
    Notification.error({
      message: "Something went wrong, please try again",
    });
    localStorage.clear();
    Cookies.remove("token");
    return Promise.reject(error);
  }
);

export default api;
