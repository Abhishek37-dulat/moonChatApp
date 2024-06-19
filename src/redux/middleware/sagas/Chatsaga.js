import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../../reducers/ducks/ChatDuck";
import { error, success } from "../../../modules/shared/Notifications";
import { SignIn, SignUp, VerifyMe } from "../../../api/userApi";
import {
  createChatApi,
  createMessageApi,
  getChatApi,
  getChatMembersApi,
  getMessagesApi,
} from "../../../api/chatApi";

export function* createChat({ payload }) {
  console.log(payload);
  try {
    const chatDetails = yield call(createChatApi, payload);
    console.log("userDetails: ", chatDetails);
    yield put(actions.updateAuthLoading(true));
    if (chatDetails?.status === 200 || chatDetails?.status === 201) {
      if (chatDetails?.data?.isGroup) {
        yield put(actions.userChatsResponse({ response: chatDetails?.data }));
        success("Group Created Successfully!");
      } else {
        yield put(actions.userChatsResponse({ response: chatDetails?.data }));
      }
    } else if (
      chatDetails?.status === 400 ||
      chatDetails?.status === 401 ||
      chatDetails?.status === 404 ||
      chatDetails?.status === 403
    ) {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
      );
    } else {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
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

export function* createMessage({ payload }) {
  try {
    const messageDetails = yield call(createMessageApi, payload);
    console.log("userDetails: ", messageDetails);
    yield put(actions.updateAuthLoading(true));
    if (messageDetails?.status === 200 || messageDetails?.status === 201) {
      yield put(
        actions.userChatMessgesResponse({
          response: messageDetails?.data,
        })
      );
    } else if (
      messageDetails?.status === 400 ||
      messageDetails?.status === 401 ||
      messageDetails?.status === 404 ||
      messageDetails?.status === 403
    ) {
      error(
        messageDetails?.data?.message ||
          messageDetails?.message ||
          messageDetails?.data?.data?.message
      );
    } else {
      error(
        messageDetails?.data?.message ||
          messageDetails?.message ||
          messageDetails?.data?.data?.message
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

export function* getChats({ payload }) {
  try {
    const chatDetails = yield call(getChatApi, payload);
    console.log("getChatDetails: ", chatDetails);
    yield put(actions.updateAuthLoading(true));
    if (chatDetails?.status === 200 || chatDetails?.status === 201) {
      yield put(actions.getUserChatsResponse({ response: chatDetails?.data }));
    } else if (
      chatDetails?.status === 400 ||
      chatDetails?.status === 401 ||
      chatDetails?.status === 404 ||
      chatDetails?.status === 403
    ) {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
      );
    } else {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
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

export function* userChatMembers({ payload }) {
  try {
    console.log(payload);
    const chatDetails = yield call(getChatMembersApi, payload);
    console.log("getMemberDetails: ", chatDetails);
    yield put(actions.updateAuthLoading(true));
    if (chatDetails?.status === 200 || chatDetails?.status === 201) {
      yield put(
        actions.userChatMembersResponse({ response: chatDetails?.data })
      );
    } else if (
      chatDetails?.status === 400 ||
      chatDetails?.status === 401 ||
      chatDetails?.status === 404 ||
      chatDetails?.status === 403
    ) {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
      );
    } else {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
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

export function* getChatMessages({ payload }) {
  try {
    const chatDetails = yield call(getMessagesApi, payload);
    console.log("userDetails: ", chatDetails);
    yield put(actions.updateAuthLoading(true));
    if (chatDetails?.status === 200 || chatDetails?.status === 201) {
      yield put(
        actions.getUserChatMessgesResponse({
          response: chatDetails?.data,
        })
      );
    } else if (
      chatDetails?.status === 400 ||
      chatDetails?.status === 401 ||
      chatDetails?.status === 404 ||
      chatDetails?.status === 403
    ) {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
      );
    } else {
      error(
        chatDetails?.data?.message ||
          chatDetails?.message ||
          chatDetails?.data?.data?.message
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

export function* getCurrentMessages({ payload }) {
  try {
    yield put(actions.updateAuthLoading(true));
    console.log(payload);
    yield put(actions.getCurrentUserMessageResponse({ response: payload }));
    yield put(actions.updateAuthLoading(false));
  } catch (err) {
    error(err.message);
    yield put(actions.updateAuthLoading(false));
  } finally {
    yield put(actions.updateAuthLoading(false));
  }
}

export function* watchChatSagas() {
  yield takeLatest(actions.chatReq.type, createChat);
  yield takeLatest(actions.messageReq.type, createMessage);
  yield takeLatest(actions.getChatReq.type, getChats);
  yield takeLatest(actions.getMemberReq.type, userChatMembers);
  yield takeLatest(actions.getMessageReq.type, getChatMessages);
  yield takeLatest(actions.getCurrentUserMessageReq.type, getCurrentMessages);
}
