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

export const ForgotPassword = async (data) => {
  try {
    return await axios.post(`${urls.auth.forgotpassword}`, data.payload);
  } catch (error) {
    return error.response;
  }
};

export const VerifyForgotPassword = async (data) => {
  try {
    console.log(data.payload.param.email, data.payload.data);
    return await axios.patch(
      `${urls.auth.verifyforgotpassword}/${data.payload.param.email}`,
      data.payload.data
    );
  } catch (error) {
    return { status: 400, message: error.response?.data?.message };
  }
};

export const ChangePassword = async (data) => {
  try {
    console.log(data);
    return await axios.patch(`${urls.auth.changepassword}`, data.payload.data, {
      headers: { Authorization: data.payload.token },
    });
  } catch (error) {
    return { status: 400, message: error.response?.data?.message };
  }
};

export const Profile = async (data) => {
  console.log(data);
  try {
    return await axios.get(`${urls.auth.profile}`, {
      headers: { Authorization: data.payload.token },
    });
  } catch (error) {
    return error.response;
  }
};

export const ProfileUpdate = async (data) => {
  try {
    return await axios.patch(`${urls.auth.profile}`, data.payload.data, {
      headers: { Authorization: data.payload.token },
    });
  } catch (error) {
    return error.response;
  }
};

export const AllUserApi = async (data) => {
  try {
    return await axios.get(`${urls.auth.allusers}`, {
      headers: { Authorization: data.payload.token },
    });
  } catch (error) {
    return error.response;
  }
};

export const searchByEmail = async (data) => {
  try {
    return await axios.get(
      `${urls.auth.searchme}?userEmail=${data.payload.query}`,
      {
        headers: { Authorization: data.payload.token },
      }
    );
  } catch (error) {
    return error.response;
  }
};
