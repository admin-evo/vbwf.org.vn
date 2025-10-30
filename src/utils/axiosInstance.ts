import axios from "axios";
import { generateAccessKey } from "./generateAccessKey";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.your-domain.com";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.data && typeof config.data === "object") {
      config.data = {
        ...config.data,
        ...generateAccessKey(),
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
