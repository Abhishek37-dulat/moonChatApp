import { all } from "redux-saga/effects";
import { watchUserSagas } from "./sagas/UsersSaga";

export default function* rootSaga() {
  yield all([watchUserSagas()]);
}
