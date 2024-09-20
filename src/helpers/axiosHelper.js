import axios from "axios";

export const apiProcessor = async (axiosObj) => {
  try {
    const { url, method, data } = axiosObj;
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",

      //showing raw error message from the server
      message: error?.response?.data?.error || error.message,
    };
  }
};
