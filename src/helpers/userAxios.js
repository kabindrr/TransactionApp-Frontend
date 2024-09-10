import { apiProcessor } from "./axiosHelper.js";
const rootApiEP = "http://localhost:8001/api/v1";

export const postNewUser = (data) => {
  const axiosObj = {
    method: "Post",
    url: rootApiEP + "/users",
    data,
  };
  return apiProcessor(axiosObj);
};
