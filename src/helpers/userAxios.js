import { apiProcessor } from "./axiosHelper.js";
const rootApiEP = import.meta.VITE_ROOT_API;

const getAccessJWT = () => {
  return localStorage.getItem("jwtToken");
};

export const postNewUser = (data) => {
  const axiosObj = {
    method: "Post",
    url: rootApiEP + "/users",
    data,
  };
  return apiProcessor(axiosObj);
};

export const loginUser = (data) => {
  const axiosObj = {
    method: "post",
    url: rootApiEP + "/users/login",
    data: data,
  };
  return apiProcessor(axiosObj);
};

//get user profile
export const getUser = () => {
  const axiosObj = {
    method: "get",
    url: rootApiEP + "/users",
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(axiosObj);
};

//integrating delete feature in transaction app
