import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  userChats: [],
  userChatMembers: [],
  userChatMessages: [],
  currentUserMessage: undefined,
  isSuccess: false,
  isLoading: false,
};

const sortArray = (arr) => {
  return arr.sort((a, b) => a.id - b.id);
};

const handleChatArrayEqual = (arr1, arr2) => {
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) {
      return false;
    }
  }
  return true;
};

const toPlainObject = (value) => {
  return JSON.parse(JSON.stringify(value));
};

const chatSlice = createSlice({
  name: "chat",
  initialState: INITIAL_STATE,
  reducers: {
    userChatsResponse(state, { payload }) {
      return {
        ...state,
        userChats: [...state.userChats, payload.response],
      };
    },
    userChatMessgesResponse(state, { payload }) {
      let tempData = state.userChatMessages;
      let data = toPlainObject(tempData);
      data.map((item) =>
        item[0]?.chatId === payload.response.chatId
          ? item.push(payload.response)
          : item
      );
      return {
        ...state,
        userChatMessages: data,
      };
    },
    userChatMembersResponse(state, { payload }) {
      return {
        ...state,
        userChatMembers: payload.response,
      };
    },

    getUserChatsResponse(state, { payload }) {
      const firstArray = sortArray([...state.userChats]);
      const secondArray = sortArray([...payload.response]);
      console.log(firstArray, secondArray);
      if (!handleChatArrayEqual(firstArray, secondArray)) {
        return {
          ...state,
          userChats: payload.response,
        };
      }
    },
    getUserChatMessgesResponse(state, { payload }) {
      const firstArray = sortArray(toPlainObject(state.userChatMessages));
      const secondArray = sortArray([...payload.response]);
      if (!handleChatArrayEqual(firstArray, secondArray)) {
        return {
          ...state,
          userChatMessages: payload.response,
        };
      }
    },
    getUserChatMembersResponse(state, { payload }) {
      const firstArray = sortArray([...state.userChatMembers]);
      const secondArray = sortArray([...payload.response]);
      if (!handleChatArrayEqual(firstArray, secondArray)) {
        return {
          ...state,
          userChatMembers: payload.response,
        };
      }
    },
    getCurrentUserMessageResponse(state, { payload }) {
      return {
        ...state,
        currentUserMessage: payload.response,
      };
    },

    chatReq: (state) => state,
    memberReq: (state) => state,
    messageReq: (state) => state,
    getChatReq: (state) => state,
    getMemberReq: (state) => state,
    getMessageReq: (state) => state,
    getCurrentUserMessageReq: (state) => state,
    updateAuthLoading(state, { payload }) {
      return {
        ...state,
        isLoading: payload,
      };
    },
  },
});

export const {
  chatReq,
  memberReq,
  messageReq,
  getChatReq,
  getMemberReq,
  getMessageReq,
  getCurrentUserMessageReq,
  userChatMembersResponse,
  userChatMessgesResponse,
  userChatsResponse,
  getUserChatMembersResponse,
  getUserChatMessgesResponse,
  getUserChatsResponse,
  getCurrentUserMessageResponse,
  updateAuthLoading,
} = chatSlice.actions;

export default chatSlice.reducer;
