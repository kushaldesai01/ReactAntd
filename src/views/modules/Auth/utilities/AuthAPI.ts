import { API_URL } from "../../../../variables/apiURL";
import api from "../../../../config/axios";
import Cookies from "js-cookie";

export const signup = async (payload: any) => {
  try {
    const response = await api.post(API_URL.AUTH.SIGNUP, payload, { showToast: true });
    Cookies.set("token", response?.data?.data?.token);
    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

export const login = async (payload: any) => {
  try {
    const response = await api.post(API_URL.AUTH.LOGIN, payload);
    Cookies.set("token", response?.data?.data?.token);
    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

export const forgotPasswordAPI = async (payload: any) => {
  try {
    const response = await api.post(API_URL.AUTH.FORGOT_PASSWORD, payload, { showToast: true });
    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

export const resetPasswordAPI = async (payload: any) => {
  try {
    const response = await api.post(API_URL.AUTH.RESET_PASSWORD, payload, { showToast: true });
    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};
