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
      message: error.message,
    };
  }
};