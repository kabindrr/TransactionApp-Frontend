import { apiProcessor } from "./axiosHelper.js";
const rootApiEP = "https://transactionapp-backend-1.onrender.com/api/v1";

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
