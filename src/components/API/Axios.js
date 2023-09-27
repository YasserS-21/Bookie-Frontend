import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3003"
      : "https://bookie-1v8z.onrender.com/",
  timeout: 50000,
});

export default AxiosInstance;