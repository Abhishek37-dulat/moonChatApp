import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../../reducers/ducks/UsersDuck";
import { error, success } from "../../../modules/shared/Notifications";
import { SignUp } from "../../../api/userApi";

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

export function* watchUserSagas() {
  yield takeLatest(actions.registerUser.type, register);
}
