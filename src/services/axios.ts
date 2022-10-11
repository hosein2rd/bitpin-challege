import axios, { AxiosError, AxiosResponse } from "axios";

const axiosInstance = axios.create({ baseURL: "https://api.bitpin.ir/v1/mkt" });

axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
