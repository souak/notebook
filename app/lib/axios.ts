import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors
api.interceptors.response.use(
  response => response,
  error => {
    // 👇 Global error handler
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

export default api;
