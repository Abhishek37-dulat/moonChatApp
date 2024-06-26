import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  loginResponse: null,
  alluserData: [],
  searchUser: [],
  userProfile: null,
  registerUserStatus: false,
  currentNavModel: "",
  userIncome: 0,
  verifyEmail: "",
  passwordResetSuccess: false,
  afterSignup: false,
  passwordChangeStatus: false,
  isVerified: false,
  isSuccess: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    loginResponse(state, { payload }) {
      return {
        ...state,
        loginResponse: payload.response,
      };
    },
    profileResponse(state, { payload }) {
      return {
        ...state,
        userProfile: payload.response,
      };
    },
    authorizeUser: (state) => state,
    registerUser: (state) => state,
    userVerification: (state) => state,
    handleLogoutRequest: (state) => state,
    requestProfile: (state) => state,
    forgetPassword: (state) => state,
    updatePassword: (state) => state,
    resetInitialPasswordState: (state) => state,
    changePassword: (state) => state,
    changePasswordStatus: (state) => state,
    getUserIncome: (state) => state,
    updateUserIncome: (state) => state,
    changeNavDilog: (state) => state,
    allusers: (state) => state,
    reqSearch: (state) => state,
    reqProfileUpdate: (state) => state,
    updateAuthSuccessStatus(state, { payload }) {
      return {
        ...state,
        isSuccess: payload,
      };
    },
    getSearch(state, { payload }) {
      return {
        ...state,
        searchUser: payload.response,
      };
    },
    updateAuthLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
    updateNavModel(state, { payload }) {
      return {
        ...state,
        currentNavModel: payload.response,
      };
    },
    EmailStore(state, { payload }) {
      return {
        ...state,
        verifyEmail: payload.response,
      };
    },
    handlePasswordReset(state, { payload }) {
      return {
        ...state,
        passwordResetSuccess: payload.response,
      };
    },
    handlePasswordChangeStatus(state, { payload }) {
      return {
        ...state,
        passwordChangeStatus: payload.response,
      };
    },
    UserResIncome(state, { payload }) {
      return {
        ...state,
        userIncome: payload.response,
      };
    },
    UserResAfterSignup(state, { payload }) {
      return {
        ...state,
        afterSignup: payload.response,
      };
    },
    isUserVerified(state, { payload }) {
      return { ...state, isVerified: payload.response };
    },
    getAllUserData(state, { payload }) {
      return { ...state, alluserData: payload.response };
    },
    userLogout(state) {
      return {
        ...state,
        loginResponse: null,
        alluserData: [],
        searchUser: [],
        userProfile: null,
        registerUserStatus: false,
        currentNavModel: "",
        userIncome: 0,
        verifyEmail: "",
        passwordResetSuccess: false,
        afterSignup: false,
        passwordChangeStatus: false,
        isVerified: false,
        isSuccess: false,
        isLoading: false,
      };
    },
  },
});

export const {
  loginResponse,
  profileResponse,
  authorizeUser,
  registerUser,
  handleLogoutRequest,
  requestProfile,
  forgetPassword,
  updatePassword,
  updateAuthSuccessStatus,
  updateAuthLoading,
  updateNavModel,
  changeNavDilog,
  EmailStore,
  getUserIncome,
  updateUserIncome,
  UserResIncome,
  changePassword,
  UserResAfterSignup,
  userVerification,
  isUserVerified,
  userLogout,
  handlePasswordReset,
  resetInitialPasswordState,
  handlePasswordChangeStatus,
  changePasswordStatus,
  allusers,
  getAllUserData,
  getSearch,
  reqSearch,
  reqProfileUpdate,
} = userSlice.actions;

export default userSlice.reducer;
