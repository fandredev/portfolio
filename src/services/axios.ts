import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL_PORTFOLIO,
  headers: {
    "Content-Type": "application/json",
  },
});
