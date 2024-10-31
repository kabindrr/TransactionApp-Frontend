import { apiProcessor } from "./axiosHelper";
const getAccessJWT = () => {
  return localStorage.getItem("jwtToken");
};

const rootApiEP = import.meta.env.VITE_ROOT_API;

export const postTransaction = (data) => {
  const axiosObj = {
    method: "POST",
    url: rootApiEP + "/transactions",
    data: data,
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
export const deleteTransactions = (data) => {
  const axiosObj = {
    method: "Delete",
    url: rootApiEP + "/transactions",
    data,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(axiosObj);
};
