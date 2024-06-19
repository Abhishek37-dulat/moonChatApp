import { Box, Typography, styled } from "@mui/material";
import { lazy, useEffect, useState } from "react";
import TotalUser from "./TotalUser";
import ChatButton from "./ChatButton";
import ChatNavBar from "./chatNavBar/ChatNavBar";
import InitialPage from "./initialPage/InitialPage";
import MessageScreen from "./messageScreen/MessageScreen";
import ChatProfile from "./chatProfile/ChatProfile";
import { useDispatch, useSelector } from "react-redux";
import { requestProfile } from "../../redux/reducers/ducks/UsersDuck";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  width: "100%",
  // minHeight: "calc(100vh - 200px)",
  // padding: "40px",
  // [theme.breakpoints.down("sm")]: {
  //   width: "calc(100% - 20px)",
  //   padding: "10px",
  //   alignItems: "center",
  // },
}));

const LeftMost = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
}));
const SeeUserBack = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  position: "absolute",
  top: "80px",
  right: "0px",
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
const CenterMost = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  position: "relative",
}));
const SeeUser = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  position: "absolute",
  top: "80px",
  left: "0px",
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

const RightMost = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "none",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  // maxWidth: "450px",
}));

// layer 0 for 1fr 2fr
// layer 1 for 1fr 2fr 1fr
// layer 2 for 1fr
const HomePage = () => {
  const dispatch = useDispatch();
  const [layerNumbers, setLayerNumbers] = useState(0);
  const [initialScreen, setInitialScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const token = useSelector((state) => state.userDetails.loginResponse);
  const userMessages = useSelector(
    (state) => state.chatDetails.currentUserMessage
  );

  const handleAllUser = () => {
    setLayerNumbers(3);
  };
  const handleAllMessages = () => {
    setLayerNumbers(2);
  };

  useEffect(() => {
    dispatch(requestProfile({ token: token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (userMessages === undefined) {
      setInitialScreen(true);
    } else {
      setInitialScreen(false);
    }
  }, [userMessages]);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth <= 600 && (layerNumbers === 0 || layerNumbers === 1)) {
      setLayerNumbers(2);
    }
  }, []);
  return (
    <MainBox
      style={{
        gridTemplateColumns: `${
          layerNumbers === 0
            ? "1fr 2fr"
            : layerNumbers === 1
            ? "1fr 2fr 1fr"
            : "1fr"
        }`,
      }}
    >
      <LeftMost
        style={{
          display: `${
            layerNumbers === 2 || layerNumbers === 4 ? "none" : "flex"
          }`,
        }}
      >
        {" "}
        <ChatNavBar />
        <SeeUserBack
          onClick={() => handleAllMessages()}
          style={{
            display: `${layerNumbers === 3 ? "flex" : "none"}`,
          }}
        >
          <Typography>
            <ChevronLeftRounded />
          </Typography>
          <Typography>back</Typography>
        </SeeUserBack>
      </LeftMost>
      <CenterMost
        style={{
          display: `${
            layerNumbers === 3 || layerNumbers === 4 ? "none" : "flex"
          }`,
        }}
      >
        {initialScreen ? (
          <InitialPage />
        ) : (
          <MessageScreen
            layerNumbers={layerNumbers}
            setLayerNumbers={setLayerNumbers}
            screenWidth={screenWidth}
          />
        )}
        <SeeUser
          onClick={() => handleAllUser()}
          style={{
            display: `${layerNumbers === 2 ? "flex" : "none"}`,
          }}
        >
          <Typography>See All Users</Typography>
          <Typography>
            <ChevronRightRoundedIcon />
          </Typography>
        </SeeUser>
      </CenterMost>
      <RightMost
        style={{
          display: `${
            layerNumbers === 0 || layerNumbers === 2 || layerNumbers === 3
              ? "none"
              : "flex"
          }`,
        }}
      >
        <ChatProfile
          layerNumbers={layerNumbers}
          setLayerNumbers={setLayerNumbers}
          screenWidth={screenWidth}
        />
      </RightMost>
    </MainBox>
  );
};

export default HomePage;
