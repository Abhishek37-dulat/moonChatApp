import axios from "axios";
import urls from "./urls.js";

export const createChatApi = async (data) => {
  try {
    return await axios.post(`${urls.chat.newchat}`, data.data, {
      headers: { Authorization: data.token },
    });
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};

export const createMessageApi = async (data) => {
  try {
    return await axios.post(`${urls.chat.newMessage}`, data.data, {
      headers: { Authorization: data.token },
    });
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};

export const getChatApi = async (data) => {
  try {
    return await axios.get(`${urls.chat.getchat}/${data?.userId}/chats`, {
      headers: { Authorization: data.token },
    });
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};

export const getChatMembersApi = async (data) => {
  try {
    console.log(data);
    const finaldata = [];
    for (let index = 0; index < data?.chatData?.length; index++) {
      let item = await axios.get(
        `${urls.chat.getchatMember}/${data?.chatData[index]?.id}`,
        {
          headers: { Authorization: data.token },
        }
      );
      finaldata.push(item?.data);
    }

    return { status: 200, data: finaldata };
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};

export const getMessagesApi = async (data) => {
  try {
    const finaldata = [];
    for (let index = 0; index < data?.chatData?.length; index++) {
      let item = await axios.get(
        `${urls.chat.getMessage}/${data?.chatData[index]?.id}/messages`,
        {
          headers: { Authorization: data.token },
        }
      );
      finaldata.push(item?.data);
    }
    return { status: 200, data: finaldata };
  } catch (error) {
    console.log("error", error);
    return error.response;
  }
};
