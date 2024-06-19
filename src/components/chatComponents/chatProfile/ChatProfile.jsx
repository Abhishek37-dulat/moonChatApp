import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Person from "../../../assets/avatar-design.png";
import DemoImg from "../../../assets/116482581-red-dragon-head-icon-filled-flat-sign-solid-logo-design-template-illustration-on-white-background.webp";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRequest } from "../../../redux/reducers/ducks/UsersDuck";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "calc(100% - 40px)",
  height: "calc(100vh - 40px)",
  padding: "20px",
  backgroundColor: "#1E2126",
  overflow: "hidden",
}));

const BackButton = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  "&>button": {
    "&>svg": {
      fontSize: "24px",
      color: "#fff",
    },
  },
}));

const ProfileBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "&>div:nth-of-type(1)": {
    border: "3px solid #D9D9D9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    boxShadow: "0px 3px 5px rgba(255,252,252,0.3)",
    minWidth: "70px",
    height: "70px",
    overflow: "hidden",
    "&>div": {
      //   border: "3px solid #D9D9D9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "100%",
      backgroundColor: "#D9D9D9",
      boxShadow: "0px 3px 5px rgba(255,252,252,0.3)",
      width: "65px",
      height: "65px",
      overflow: "hidden",
      "&>img": {
        width: "100%",
      },
    },
  },
}));

const ProfileDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
  "&>p:nth-of-type(1)": {
    fontWeight: "500",
    color: "#fff",
  },
  "&>p:nth-of-type(2)": {
    fontWeight: "300",
    color: "#3765FC",
  },
  "&>p:nth-of-type(3)": {
    fontWeight: "300",
    color: "#fff",
  },

  "&>p:nth-of-type(4)": {
    fontWeight: "300",
    color: "#48B1C0",
  },
}));

const ProfileGroupDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
  "&>p:nth-of-type(1)": {
    fontWeight: "500",
    color: "#fff",
  },
  "&>p:nth-of-type(2)": {
    fontWeight: "300",
    color: "#3765FC",
  },
  "&>p:nth-of-type(3)": {
    fontWeight: "300",
    color: "#fff",
  },

  "&>p:nth-of-type(4)": {
    fontWeight: "300",
    color: "#48B1C0",
  },
}));

const SharedDocumentBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid #D9D9D9",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
  "&>div:nth-of-type(1)": {
    borderBottom: "1px solid #D9D9D9",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    "&>p:nth-of-type(1)": {
      fontWeight: "500",
      color: "#fff",
    },
  },
  "&>div:nth-of-type(2)": {
    // borderBottom: "1px solid #D9D9D9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "relative",
    marginTop: "10px",
    "&>div:nth-of-type(1)": {
      // borderBottom: "1px solid #D9D9D9",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      maxWidth: "300px",
      width: "calc(100% - 50px)",
      padding: "10px",
      overflowX: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",

      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&>div": {
        minWidth: "70px",
        height: "70px",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
        marginRight: "10px",
        "&>img": {
          width: "100%",
          height: "100%",
        },
      },
    },
    "&>div:nth-of-type(2)": {
      //   borderBottom: "1px solid #D9D9D9",
      position: "absolute",
      right: "-20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
      boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
      width: "50px",
      height: "100%",
      backgroundColor: "#16191C",
      zIndex: "10",
      "&>button": {
        "&>svg": {
          fontWeight: "500",
          color: "#fff",
        },
      },
    },
  },
}));
const OtherUsers = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
}));

const ChatProfile = ({ layerNumbers, setLayerNumbers, screenWidth }) => {
  const profileData = useSelector((state) => state.userDetails.userProfile);
  const allusersData = useSelector((state) => state.userDetails.alluserData);
  const userMessages = useSelector(
    (state) => state.chatDetails.currentUserMessage
  );
  const [userDetails, setUserDetails] = useState([]);
  const handlechatProfile = () => {
    if (screenWidth <= 600) {
      setLayerNumbers(2);
    } else {
      setLayerNumbers(0);
    }
  };
  useEffect(() => {
    let otherUsers = userMessages?.users?.filter(
      (item) => item?.id !== profileData?.id
    );
    let detail = otherUsers?.map((item) =>
      allusersData?.filter((value) => value?.id === item?.id)
    );
    setUserDetails([...detail]);
  }, [userMessages, allusersData, profileData]);
  console.log(userDetails);
  return (
    <MainBox>
      <BackButton>
        <IconButton onClick={() => handlechatProfile()}>
          <ArrowBackRoundedIcon />
        </IconButton>
      </BackButton>
      <ProfileBox
        style={{
          flexDirection: `${!userDetails?.length > 1 ? "row" : "column"}`,
        }}
      >
        <Box>
          <Box>
            <img src={Person} alt="person" />
          </Box>
        </Box>
        {userDetails?.length > 0 &&
          userDetails?.map((item) => {
            return (
              <ProfileDetails
                style={{
                  justifyContent: `${
                    userDetails?.length > 1 ? "flex-start" : "center"
                  }`,

                  alignItems: `${
                    userDetails?.length > 1 ? "flex-start" : "center"
                  }`,

                  marginLeft: `${userDetails?.length > 1 ? "10px" : "0px"}`,
                }}
              >
                <Typography>
                  {item[0]?.first_name + " " + item[0]?.last_name}
                </Typography>
                <Typography>{item[0]?.email}</Typography>
                <Typography>+91 {item[0]?.phone_number}</Typography>
                <Typography>online</Typography>
              </ProfileDetails>
            );
          })}
      </ProfileBox>
      <SharedDocumentBox>
        <Box>
          <Typography>Shaired Documents</Typography>
        </Box>
        <Box>
          <Box>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
              return (
                <Box key={index}>
                  <img src={DemoImg} alt="person" />
                </Box>
              );
            })}
          </Box>
          <Box>
            <IconButton>
              <ArrowForwardRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </SharedDocumentBox>
      <OtherUsers></OtherUsers>
    </MainBox>
  );
};

export default ChatProfile;
