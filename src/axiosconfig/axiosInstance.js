import axios from "axios"
import SpinnerLoader from "../Store/Actions/action";
import store from "../Store/store";

const axiosInstance=axios.create(
    {baseURL:'https://api.themoviedb.org/3/movie'}
)
axiosInstance.interceptors.request.use(
    function (config) {
      store.dispatch(SpinnerLoader(true));
      
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      store.dispatch(SpinnerLoader(false));
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
export default axiosInstance