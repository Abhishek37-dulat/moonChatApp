import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../../reducers/ducks/UsersDuck";
import { error, success } from "../../../modules/shared/Notifications";
import {
  AllUserApi,
  Profile,
  ProfileUpdate,
  SignIn,
  SignUp,
  VerifyMe,
  searchByEmail,
} from "../../../api/userApi";

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
    } else if (
      userDetails?.status === 400 ||
      userDetails?.status === 401 ||
      userDetails?.status === 404 ||
      userDetails?.status === 403
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

export function* userProfile(payload) {
  try {
    console.log(payload);
    const userDetails = yield call(Profile, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.profileResponse({ response: userDetails?.data?.data }));
      yield userData(payload);
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

export function* userData(payload) {
  try {
    const userDetails = yield call(AllUserApi, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.getAllUserData({ response: userDetails?.data?.data }));
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

export function* searchUsers(payload) {
  try {
    const userDetails = yield call(searchByEmail, payload);
    console.log(userDetails);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.getSearch({ response: userDetails?.data?.data }));
      yield put(actions.updateAuthLoading(false));
    } else if (userDetails?.status === 400 || userDetails?.status === 401) {
      error(
        userDetails?.data?.message ||
          userDetails?.message ||
          userDetails?.data?.data?.message
      );
    } else if (userDetails?.status === 404) {
      yield put(actions.updateAuthLoading(false));
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

export function* updateUserProfile(payload) {
  try {
    console.log(payload);
    const userDetails = yield call(ProfileUpdate, payload);
    yield put(actions.updateAuthLoading(true));
    if (userDetails?.status === 200 || userDetails?.status === 201) {
      yield put(actions.profileResponse({ response: userDetails?.data?.data }));
      yield userData(payload);
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

export function* logoutUser(payload) {
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
  yield takeLatest(actions.registerUser.type, register);
  yield takeLatest(actions.authorizeUser.type, user);
  yield takeLatest(actions.userVerification.type, verify);
  yield takeLatest(actions.requestProfile.type, userProfile);
  yield takeLatest(actions.allusers.type, userData);
  yield takeLatest(actions.reqSearch.type, searchUsers);
  yield takeLatest(actions.handleLogoutRequest.type, logoutUser);
  yield takeLatest(actions.reqProfileUpdate.type, updateUserProfile);
}
