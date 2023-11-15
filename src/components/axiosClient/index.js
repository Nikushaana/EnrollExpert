import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("TOKEN");
  const user = localStorage.getItem("USER");
  config.headers.token = `${token}`;
  config.headers.user =  `${user}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("TOKEN");
      localStorage.removeItem("USER");
      // window.location.reload();
    } else if (response.status === 404) {
      //Show not found
    }

    throw error;
  }
);

export default axiosClient;