import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import UserDesign from "./UserDesign";
import Person from "../../../assets/avatar-design.png";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  getChatReq,
  getMemberReq,
  getMessageReq,
} from "../../../redux/reducers/ducks/ChatDuck";
import { reqSearch } from "../../../redux/reducers/ducks/UsersDuck";
import CloseIcon from "@mui/icons-material/Close";
import ProfileDetails from "./ProfileDetails";
import CreateGroup from "./CreateGroup";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "calc(100% - 40px)",
  height: "calc(100vh - 40px)",
  padding: "20px",
  backgroundColor: "#1E2126",
  overflow: "hidden",
  position: "relative",
}));
const SearchBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100% - 40px)",
    backgroundColor: "#16191C",
    padding: "10px 20px",
    borderRadius: "15px",
    boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
    "&>div:nth-of-type(1)": {
      //   border: "1px solid black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "80%",
      "&>input": {
        backgroundColor: "#16191C",
        width: "100%",
        padding: "10px 12px",
        border: "none",
        outline: "none",
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
      },
    },
    "&>div:nth-of-type(2)": {
      //   border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "20%",
      "&>svg": {
        color: "#fff",
      },
    },
  },
}));

const CreateNewGroup = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
  "&>button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% - 10px)",
    backgroundColor: "#3664FD",
    padding: "12px 20px",
    borderRadius: "8px",
    boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&>p": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
    },
  },
}));

const AllUsers = styled(Box)(({ theme }) => ({
  // border: "1px solid #fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "calc(100% - 20px)",
  // height: "100%",
  padding: "10px 10px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
}));

const ProfileSetting = styled(Box)(({ theme }) => ({
  // borderTop: "2px solid #3765FC",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "calc(100% - 20px)",
  height: "max-content",
  padding: "10px 10px",
  boxShadow: "0px -3px 3px rgba(0,0,0,0.3)",
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
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
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
      fontWeight: "300",
      fontSize: "14px",
      marginTop: "5px",
    },
  },
}));

const SearchMeBox = styled(Box)(({ theme }) => ({
  // border: "1px solid #fff",
  position: "absolute",
  top: "85px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "calc(100% - 20px)",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.7)",
  padding: "10px 10px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
}));

const CrossBox = styled(Box)(({ theme }) => ({
  // border: "1px solid #fff",
  position: "absolute",
  top: "0px",
  right: "0px",
  "&>button": {
    "&>svg": {
      color: "#fff",
    },
  },
}));

const messageData = [
  {
    username: "Abhishek Dulat",
    message: "Hii! it’s me what are you up...",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 2,
    isActive: true,
    isGroup: false,
    chatid: 2,
  },
  {
    username: "Abhishek Dulat",
    message: "Hii",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 0,
    isActive: false,
    isGroup: false,
    chatid: 3,
  },
  {
    username: "Abhishek Dulat",
    message: "Hii! it’s me what are you up...",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 5,
    isActive: true,
    isGroup: false,
    chatid: 4,
  },
  {
    username: "Abhishek Dulat",
    message: "Hii! it’s me what are you up...",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 0,
    isActive: true,
    isGroup: false,
    chatid: 5,
  },
  {
    username: "Abhishek 1",
    message: "Hii! it’s me what are you up...",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 2,
    isActive: true,
    isGroup: true,
    chatid: 1,
  },
  {
    username: "Abhishek 2",
    message: "Hii",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 0,
    isActive: false,
    isGroup: true,
    chatid: 1,
  },
  {
    username: "Abhishek 3",
    message: "Hii! it’s me what are you up...",
    time: "10:00 am",
    time2: "Last 2 days ago",
    messagecount: 5,
    isActive: true,
    isGroup: true,
    chatid: 1,
  },
];

const ChatNavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userSet, setUserSet] = useState([]);
  const usersChats = useSelector((state) => state.chatDetails.userChats);
  const token = useSelector((state) => state.userDetails.loginResponse);
  const profileData = useSelector((state) => state.userDetails.userProfile);
  const allusersData = useSelector((state) => state.userDetails.alluserData);
  const [searchCross, setSearchCross] = useState(false);
  const allSearchUsers = useSelector((state) => state.userDetails.searchUser);
  const allMessagesData = useSelector(
    (state) => state.chatDetails.userChatMessages
  );
  const usersChatMembers = useSelector(
    (state) => state.chatDetails.userChatMembers
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    dispatch(reqSearch({ token: token, query: searchValue }));
    setSearchCross(true);
  };
  const handleSearchBox = () => {
    setSearchValue("");
    setSearchCross(false);
  };
  useEffect(() => {
    let userChatDetails = [];
    for (let i = 0; i < usersChatMembers.length; i++) {
      let subMessage = [];
      for (let j = 0; j < allMessagesData.length; j++) {
        if (allMessagesData[j].length > 0) {
          if (usersChatMembers[i]?.id === allMessagesData[j][0].chatId) {
            subMessage = allMessagesData[j];
            break;
          }
        }
      }
      userChatDetails.push({
        chat: usersChatMembers[i],
        messages: subMessage,
        users: [],
      });
    }
    for (let i = 0; i < userChatDetails.length; i++) {
      if (userChatDetails[i].chat.chatMembers.length > 0) {
        for (let j = 0; j < userChatDetails[i].chat.chatMembers.length; j++) {
          let data = allusersData.filter(
            (item) => item.id === userChatDetails[i].chat.chatMembers[j].userId
          );
          console.log(data[0]);
          userChatDetails[i].users.push(data[0]);
        }
      }
    }

    setUserSet(userChatDetails);
  }, [usersChatMembers, allusersData, allMessagesData]);
  useEffect(() => {
    if (token) {
      console.log(profileData, profileData?.id);
      dispatch(getChatReq({ token: token, userId: profileData?.id }));
    }
  }, [dispatch, token, profileData]);
  useEffect(() => {
    if (usersChats.length > 0) {
      dispatch(getMemberReq({ token: token, chatData: usersChats }));
    }
  }, [dispatch, usersChats, token]);
  useEffect(() => {
    if (usersChats.length > 0) {
      dispatch(getMessageReq({ token: token, chatData: usersChats }));
    }
  }, [dispatch, usersChats, token]);
  // console.log(userSet);
  console.log("User Chats:: ", userSet);
  console.log(allSearchUsers);
  return (
    <MainBox>
      <SearchBox>
        <Box>
          <Box>
            <input
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => handleSearchValue(e)}
            />
          </Box>
          <Box>
            <SearchRounded />
          </Box>
        </Box>
      </SearchBox>
      <CreateNewGroup>
        <button onClick={handleClickOpen}>
          <Typography>Create New Group</Typography>
          <Typography>
            <AddRoundedIcon />
          </Typography>
        </button>
      </CreateNewGroup>
      <AllUsers>
        {userSet?.map((data, index) => {
          return (
            <UserDesign data={data} userProfile={profileData} key={index} />
          );
        })}
      </AllUsers>
      <ProfileSetting>
        <Box>
          {" "}
          <img src={Person} alt="person" />
        </Box>
        <Box>
          <Typography onClick={() => navigate("/profile")}>
            Profile Setting <SettingsRoundedIcon />
          </Typography>
          <Typography>Abhishek Dulat</Typography>
        </Box>
      </ProfileSetting>
      <SearchMeBox style={{ display: `${!searchCross ? "none" : "flex"}` }}>
        <CrossBox>
          <IconButton onClick={() => handleSearchBox()}>
            <CloseIcon />
          </IconButton>
        </CrossBox>
        {allSearchUsers?.map((data, index) => {
          if (data?.id !== profileData?.id) {
            return (
              <ProfileDetails
                data={data}
                key={index}
                userProfile={profileData}
              />
            );
          }
        })}
      </SearchMeBox>
      <CreateGroup open={open} setOpen={setOpen} handleClose={handleClose} />
    </MainBox>
  );
};

export default ChatNavBar;
