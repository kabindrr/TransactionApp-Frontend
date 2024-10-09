import axios from "axios";

export const apiProcessor = async (axiosObj) => {
  try {
    const { url, method, data, headers } = axiosObj;

    const response = await axios({
      method,
      url,
      data,
      headers,
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
