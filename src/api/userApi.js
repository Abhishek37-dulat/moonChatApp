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

export const SignIn = async (data) => {
  try {
    return await axios.post(`${urls.auth.login}`, { ...data.data });
  } catch (error) {
    return error.response;
  }
};

export const VerifyMe = async (data) => {
  try {
    return await axios.patch(`${urls.auth.verify}/${data.id}`);
  } catch (error) {
    return error.response;
  }
};
