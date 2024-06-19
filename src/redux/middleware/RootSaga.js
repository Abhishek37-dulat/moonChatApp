import { all } from "redux-saga/effects";
import { watchUserSagas } from "./sagas/UsersSaga";
import { watchChatSagas } from "./sagas/Chatsaga";
export default function* rootSaga() {
  yield all([watchUserSagas(), watchChatSagas()]);
}
