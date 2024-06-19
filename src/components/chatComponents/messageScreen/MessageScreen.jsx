import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Person from "../../../assets/avatar-design.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faImage,
  faMicrophoneLines,
  faPaperclip,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import SenderDesign from "./SenderDesign";
import ReciverDesign from "./ReciverDesign";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessageReq,
  messageReq,
} from "../../../redux/reducers/ducks/ChatDuck";
import { useSocket } from "../../../context/SocketContext";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: "#16191C",
  //   overflow: "hidden",
}));

const TopDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid #fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "calc(100% - 40px)",
  minHeight: "50px",
  padding: "20px 20px",
  boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
  backgroundColor: "#1E2126",
  borderRadius: "0px 0px 8px 8px",
  position: "relative",
  "&>div:nth-of-type(1)": {
    // borderTop: "2px solid #3765FC",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "calc(100% - 20px)",
    height: "max-content",
    padding: "10px 10px",
    "&>div:nth-of-type(1)": {
      // border: "1px solid black",
      width: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "100%",
      overflow: "hidden",
      backgroundColor: "#D9D9D9",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
      "&>img": {
        width: "100%",
        borderRadius: "100%",
      },
    },
    "&>div:nth-of-type(2)": {
      // border: "1px solid #fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      // width: "100%",
      marginLeft: "10px",
      "&>p:nth-of-type(1)": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontWeight: "500",
        fontSize: "20px",
        transition: "0.4s",
        "&>svg": {
          color: "#fff",
          fontWeight: "300",
          fontSize: "20px",
          marginTop: "5px",
          marginLeft: "5px",
        },
      },
      "&>p:nth-of-type(2)": {
        color: "#fff",
        fontWeight: "200",
        fontSize: "12px",
        marginTop: "5px",
      },
    },
  },
  "&>div:nth-of-type(2)": {
    // borderTop: "2px solid #3765FC",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>button": {
      "&>svg": {
        color: "#fff",
        fontSize: "24px",
      },
    },
  },
}));

const SeeUserDetailsBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  position: "absolute",
  top: "60px",
  right: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",
  padding: "15px 20px",
  backgroundColor: "#fff",
  transition: "0.4s",
  cursor: "pointer",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
  "&:hover": {
    backgroundColor: "#3765FC",
    color: "#fff",
  },
  "&>p": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  // maxWidth: "450px",
}));
const MessageDetailsOuter = styled(Box)(({ theme }) => ({
  // border: "1px solid #fff",
  width: "calc(100% - 40px)",
  padding: "10px 20px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
}));

const MessageDetailsInner = styled(Box)(({ theme }) => ({
  // border: "1px solid #fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  minHeight: "100%",
}));
const ChatDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid #fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "calc(100% - 40px)",
  minHeight: "20px",
  padding: "20px 20px",
  marginBottom: "10px",
  "&>form": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "&>div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "100%",
      padding: "20px 20px",
      boxShadow: "0px 5px 10px rgba(0,0,0,0.3)",
      backgroundColor: "#1E2126",
      borderRadius: "8px",
      "&>div:nth-of-type(1)": {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        "&>button": {
          "&>svg": {
            color: "#696868",
            fontSize: "24px",
            transition: "0.4s",
            "&:hover": { color: "#fff" },
          },
        },
        "&>input": {
          border: "none",
          outline: "none",
          width: "100%",
          padding: "10px 20px",
          backgroundColor: "#1E2126",
          fontFamily: '"Poppins", sans-serif',
          color: "#fff",
        },
      },
      "&>div:nth-of-type(2)": {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "max-content",
        "&>button": {
          "&>svg": {
            color: "#696868",
            fontSize: "24px",
            transition: "0.4s",
            "&:hover": { color: "#fff" },
          },
        },
      },
    },
  },
}));

const messageData = [
  {
    username: "Abhishek Dulat",
    message: "Hii! it’s me what are you up...",
    sender: "you",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 2,
    isActive: true,
  },
  {
    username: "Abhishek Dulat",
    message: "Hii",
    sender: "other",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 0,
    isActive: false,
  },
  {
    username: "Abhishek Dulat",
    message: "Hii! it’s me what are you up...",
    sender: "other",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 5,
    isActive: true,
  },
  {
    username: "Abhishek Dulat",
    message: "Hii! it’s me what are you up...",
    sender: "you",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 0,
    isActive: true,
  },
  {
    username: "Abhishek Dulat",
    message: "Hii! it’s me what are you up...",
    sender: "other",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 5,
    isActive: true,
  },
  {
    username: "Abhishek Dulat",
    message:
      "Hii! it’s me what are you it’s me what are Hii! it’s me what are you up...",
    sender: "other",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 5,
    isActive: true,
  },
];

const MessageScreen = ({ layerNumbers, setLayerNumbers, screenWidth }) => {
  const dispatch = useDispatch();
  const [messageValue, setMessageValue] = useState("");
  const [detailsView, setDetailsView] = useState(false);
  const [count, setCount] = useState(0);
  const allMessagesData = useSelector(
    (state) => state.chatDetails.userChatMessages
  );
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);

  const socket = useSocket();

  const [userSet, setUserSet] = useState([]);
  const token = useSelector((state) => state.userDetails.loginResponse);
  const userMessages = useSelector(
    (state) => state.chatDetails.currentUserMessage
  );
  const userProfile = useSelector((state) => state.userDetails.userProfile);
  console.log(userMessages);
  const usersChats = useSelector((state) => state.chatDetails.userChats);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      bottom: -100,
      behavior: "smooth",
    });
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      messageReq({
        data: {
          chatId: userMessages?.chat?.id,
          messageText: messageValue,
          messageType: "text",
          attachmentUrl: null,
          attachmentName: null,
          attachmentSize: null,
        },
        token: token,
      })
    );
    console.log(response.payload);
    if (response.payload.data) {
      setMessageValue("");
      socket.emit("newMessage", response.payload.data);
    }
    // console.log(response.payload);
    if (response.payload.data) {
      setMessageValue("");
      socket.emit("newMessage", response.payload.data);
    }
  };

  const handleRefHover = () => {
    setDetailsView(true);
  };

  const handleRefHoverLeave = () => {
    setDetailsView(false);
  };
  const handleViewProfile = () => {
    if (screenWidth <= 600) {
      setLayerNumbers(4);
    } else {
      setLayerNumbers(1);
    }
  };

  useEffect(() => {
    let userChatDetails = [];
    for (let j = 0; j < allMessagesData.length; j++) {
      if (allMessagesData[j].length > 0) {
        if (allMessagesData[j][0].chatId === userMessages?.chat?.id) {
          userChatDetails = allMessagesData[j];
          break;
        }
      }
    }
    setUserSet(userChatDetails);
    setMessages(userChatDetails);
    scrollToBottom();
  }, [allMessagesData, userMessages, dispatch, setMessageValue]);

  useEffect(() => {
    socket.emit("joinChat", { chatId: toString(userMessages?.chat?.id) });
    console.log("Joined chat with ID:", userMessages?.chat?.id);
    socket.on("newMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    scrollToBottom();
    return () => {
      socket.off("newMessage");
    };
  }, [
    userMessages?.chat?.id,
    dispatch,
    token,
    socket,
    allMessagesData,
    usersChats,
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [userSet]);

  useEffect(() => {
    dispatch(
      getMessageReq({
        token: token,
        chatData: usersChats,
      })
    );
  }, [socket, allMessagesData, dispatch, usersChats, token]);

  console.log(userSet, allMessagesData, messages, count);
  return (
    <MainBox>
      <TopDetails>
        <Box>
          <Box>
            {" "}
            <img src={Person} alt="person" />
          </Box>
          <Box>
            <Typography>Abhishek Dulat</Typography>
            <Typography>Last seen 2 day ago</Typography>
          </Box>
        </Box>
        <Box>
          <IconButton
            onMouseEnter={handleRefHover}
            onMouseLeave={handleRefHoverLeave}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </IconButton>
          <SeeUserDetailsBox
            onMouseEnter={handleRefHover}
            onMouseLeave={handleRefHoverLeave}
            style={{ display: `${detailsView ? "flex" : "none"}` }}
            onClick={() => handleViewProfile()}
          >
            <Typography>View Details</Typography>
          </SeeUserDetailsBox>
        </Box>
      </TopDetails>
      <MessageDetailsOuter>
        <MessageDetailsInner>
          {messages?.map((message, index) => {
            if (userProfile?.id && message?.senderId === userProfile?.id) {
              return (
                <SenderDesign
                  message={message}
                  user={userMessages?.users?.filter(
                    (data) => data?.id === userProfile?.id
                  )}
                  key={index}
                />
              );
            } else {
              return (
                <ReciverDesign
                  message={message}
                  user={
                    userMessages?.users?.filter(
                      (item) => item?.id === message?.senderId
                    )[0]
                  }
                  key={index}
                />
              );
            }
          })}
          <div ref={messagesEndRef} />
        </MessageDetailsInner>
      </MessageDetailsOuter>
      <ChatDetails>
        <form onSubmit={handleSubmitMessage}>
          <Box>
            <Box>
              <IconButton>
                <FontAwesomeIcon icon={faMicrophoneLines} />
              </IconButton>
              <input
                placeholder="Type something..."
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
              />
            </Box>
            <Box>
              <IconButton>
                <FontAwesomeIcon icon={faPaperclip} />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon icon={faImage} />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon icon={faVideo} />
              </IconButton>
            </Box>
          </Box>
        </form>
      </ChatDetails>
    </MainBox>
  );
};

export default MessageScreen;
