import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const axiosInstance = axios.create({
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      toast.error("Incorrect credentials", );
    } else if (error.response.status === 403) {
      toast.warning("No Permission", );
    }
    else if (error.response.status === 500) {
      toast.error("Internal Server Error", );
    }
    else if (error.response.status === 404) {
      toast.error("Not Found Error", );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
