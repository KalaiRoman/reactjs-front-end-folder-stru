import { getToken } from "../middleware/TokenGet";
import axios from "axios";
axios.interceptors.request.use(
  function (config) {
    const token = getToken();
    config.url = `${process.env.REACT_APP_BASEURL}${config.url}`;
    config.withCredentials = false;
    if (token) {
      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // if (
    //   error?.response?.data?.cdpcode === "CDPSE400" ||
    //   error?.response?.data?.cdpcode === "CDPMDL400"
    // ) {
    //   const clearid = {
    //     _id: error?.response?.data?._id,
    //   };
    //   if (error?.response?.data?.message === "your session was expired") {
    //     localStorage.clear();
    //     sessionStorage.setItem("clear", true);
    //     sessionStorage.clear();
    //     window.location.assign("/logoutsession");
    //   } else {
    //     const response = await UserSessionClear(clearid);
    //     window.location.assign("/logoutuser");
    //   }
    // }
    return Promise.reject(error);
  }
);

const instanceBaseurl = axios;
export default instanceBaseurl;
