import axios from "axios";
import urls from "./urls.js";

export const SignUp = async (data) => {
  try {
    return await axios.post(`${urls.auth.signup}`, {
      ...data.data,
    });
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};
