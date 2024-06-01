import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../../reducers/ducks/UsersDuck";
import { error, success } from "../../../modules/shared/Notifications";
import {
  ChangePassword,
  ForgotPassword,
  GetIncome,
  Prfile,
  SignIn,
  SignUp,
  UpdateIncome,
  VerifyForgotPassword,
  VerifyMe,
} from "../../../api/userApi";

export function* user({ payload }) {
  try {
    const userDetails = yield call(SignIn, payload);
    console.log(userDetails);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      const [header, payload, signature] = userDetails?.data?.data?.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      if (!decodedPayload.isVerified) {
        error("please verify yourself!");
        return;
      }
      yield put(actions.loginResponse({ response: userDetails?.data?.data }));
      yield put(actions.updateAuthLoading(false));
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* register({ payload }) {
  try {
    const userDetails = yield call(SignUp, payload);
    console.log("userDetails: ", userDetails);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      success(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
      yield put(actions.UserResAfterSignup({ response: true }));
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* userProfile(payload) {
  try {
    console.log(payload);
    const userDetails = yield call(Prfile, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.profileResponse({ response: userDetails?.data?.data }));
      yield put(actions.updateAuthLoading(false));
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* verify({ payload }) {
  try {
    const userDetails = yield call(VerifyMe, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      success(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
      yield put(actions.isUserVerified({ response: true }));
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
      yield put(actions.isUserVerified({ response: false }));
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
      yield put(actions.isUserVerified({ response: false }));
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* userForgotPassword(payload) {
  try {
    console.log(payload.payload);
    const userDetails = yield call(ForgotPassword, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.EmailStore({ response: payload.payload.email }));
      yield put(actions.updateAuthLoading(false));
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* verifyForgotPassword(payload) {
  try {
    console.log(payload);
    const userDetails = yield call(VerifyForgotPassword, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.handlePasswordReset({ response: true }));
      yield put(actions.updateAuthLoading(false));
      success("Verified Successfully!");
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* codeRest() {
  try {
    yield put(actions.updateAuthLoading(true));
    yield put(actions.handlePasswordReset({ response: false }));
    yield put(actions.EmailStore({ response: "" }));
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* userChangePassword(payload) {
  try {
    const userDetails = yield call(ChangePassword, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.handlePasswordChangeStatus({ response: true }));
      yield put(actions.updateAuthLoading(false));
      success("Password Changed SuccessFull!");
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}
export function* UpdateUserChangePassword(payload) {
  try {
    yield put(actions.updateAuthLoading(true));
    yield put(actions.handlePasswordChangeStatus({ response: false }));
    yield put(actions.userLogout());
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* userIncome(payload) {
  try {
    const userDetails = yield call(GetIncome, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.data?.status === 200 || userDetails?.data.status === 201) {
      yield put(actions.UserResIncome({ response: payload }));
      yield put(actions.updateAuthLoading(false));
    } else if (
      userDetails?.data?.status === 400 ||
      userDetails?.data.status === 401
    ) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* updateIncome(payload) {
  try {
    const userDetails = yield call(UpdateIncome, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.UserResIncome({ response: payload }));
      yield put(actions.updateAuthLoading(false));
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    }
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* pageRole(payload) {
  try {
    yield put(actions.updateAuthLoading(true));
    yield put(actions.updateNavModel({ response: payload }));
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* logoutMe() {
  try {
    yield put(actions.updateAuthLoading(true));
    yield put(actions.userLogout());
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* watchUserSagas() {
  yield takeLatest(actions.changeNavDilog.type, pageRole);
  yield takeLatest(actions.authorizeUser.type, user);
  yield takeLatest(actions.registerUser.type, register);
  yield takeLatest(actions.requestProfile.type, userProfile);
  yield takeLatest(actions.forgetPassword.type, userForgotPassword);
  yield takeLatest(actions.updatePassword.type, verifyForgotPassword);
  yield takeLatest(actions.resetInitialPasswordState.type, codeRest);
  yield takeLatest(actions.changePassword.type, userChangePassword);
  yield takeLatest(actions.changePasswordStatus.type, UpdateUserChangePassword);
  yield takeLatest(actions.getUserIncome.type, userIncome);
  yield takeLatest(actions.updateUserIncome.type, updateIncome);
  yield takeLatest(actions.changeNavDilog.type, pageRole);
  yield takeLatest(actions.userVerification.type, verify);

  yield takeLatest(actions.handleLogoutRequest.type, logoutMe);
}
