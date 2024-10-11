import { API_URL } from "../../../../variables/apiURL";
import api from "../../../../config/axios";

export const signup = async (payload: any) => {
  try {
    const response = await api.post(API_URL.AUTH.SIGNUP, payload);
    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

export const login = async (payload: any) => {
  try {
    const response = await api.post(API_URL.AUTH.LOGIN, payload);
    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};
