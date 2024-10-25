import { apiProcessor } from "./axiosHelper";
const getAccessJWT = () => {
  return localStorage.getItem("jwtToken");
};

const rootApiEP = "http://localhost:8001/api/v1";

export const postTransaction = (obj) => {
  const axiosObj = {
    method: "POST",
    url: rootApiEP + "/transactions",
    data: obj,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(axiosObj);
};

export const fetchTransactions = () => {
  const axiosObj = {
    method: "GET",
    url: rootApiEP + "/transactions",

    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(axiosObj);
};
