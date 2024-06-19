import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Person from "../../assets/avatar-design.png";
import DemoImg from "../../assets/116482581-red-dragon-head-icon-filled-flat-sign-solid-logo-design-template-illustration-on-white-background.webp";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRequest } from "../../redux/reducers/ducks/UsersDuck";
import Profile from "../../assets/man.png";
import EditProfile from "./EditProfile";

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
  "&>button": {
    padding: "5px 20px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#375AC5",
      color: "#fff",
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

const OtherUsers = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
  "&>button": {
    border: "none",
    outline: "none",
    borderRadius: "8px",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.5)",
    padding: "10px 20px",
    backgroundColor: "#3765FC",
    color: "#fff",
    cursor: "pointer",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#1e1e1e",
    },
  },
}));

const UserProfile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.userDetails.userProfile);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const [userSet, setUserSet] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(handleLogoutRequest());
    navigate("/login");
  };
  const handleEditProfile = () => {
    setOpen(true);
  };

  console.log(userSet);
  return (
    <MainBox>
      <BackButton>
        <IconButton onClick={() => navigate("/chat")}>
          <ArrowBackRoundedIcon />
        </IconButton>
      </BackButton>
      <ProfileBox>
        <Box>
          <Box>
            <img
              src={profileData?.image_url ? profileData?.image_url : Profile}
              alt="person"
            />
          </Box>
        </Box>
        <button onClick={() => handleEditProfile()}>Edit</button>
        <ProfileDetails>
          <Typography>
            {profileData?.first_name} {profileData?.last_name}
          </Typography>
          <Typography>{profileData?.email}</Typography>
          <Typography>+91 {profileData?.phone_number}</Typography>
          <Typography>online</Typography>
        </ProfileDetails>
      </ProfileBox>
      <OtherUsers>
        <button onClick={() => handleLogout()}>
          <Typography>Signout</Typography>
        </button>
      </OtherUsers>
      <EditProfile open={open} handleClose={handleClose} data={profileData} />
    </MainBox>
  );
};

export default UserProfile;
