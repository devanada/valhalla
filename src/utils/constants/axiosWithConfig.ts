import axios from "axios";

import { useAuthStore } from "@/utils/states";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      //   useAuthStore.getState().resetAuth();
      return;
    }

    return Promise.reject(error);
  }
);

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "https://hells-kitchen.onrender.com/api/v1";
  const bearerToken = useAuthStore.getState().token;

  if (bearerToken !== "") {
    axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;
  }

  return axiosConfig;
});

export default axiosWithConfig;
