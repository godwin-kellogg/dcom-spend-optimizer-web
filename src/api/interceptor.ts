import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import axios from "axios";

const axiosinstance = axios.create();

const { instance, accounts } = useMsal();

const getToken = async () => {
  const accessTokenRequest = {
    scopes: ["user.read"],
    account: accounts[0],
  };
  try {
    const res = await instance.acquireTokenSilent(accessTokenRequest);
    return res.accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      try {
        const res = await instance.acquireTokenPopup(accessTokenRequest);
        return res.accessToken;
      } catch (error) {
        console.log(error);
      }
    }
    console.log(error);
  }
};

axiosinstance.interceptors.request.use(
  function (config) {
    getToken().then((res) => {
      config.headers.Authorization = "Bearer " + res;
    });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosinstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
