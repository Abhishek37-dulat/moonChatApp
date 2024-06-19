import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Person from "../../../assets/avatar-design.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch, useSelector } from "react-redux";
import { chatReq } from "../../../redux/reducers/ducks/ChatDuck";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "calc(100% - 40px)",
  padding: "20px 20px",
  position: "relative",
  marginTop: "15px",
  backgroundColor: "#1E2126",
  borderRadius: "15px",
  boxShadow: "0px 0px 5px rgba(255,252,252,0.5)",
  transition: "0.5s",
  transformOrigin: "right center",
  cursor: "pointer",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: "#3765FC",
    // rotate: "z 20deg",
  },
  "&>div:nth-of-type(1)": {
    minWidth: "10px",
    minHeight: "10px",
    boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
    borderRadius: "100%",
    margin: "10px",
    marginLeft: "5px",
  },

  "&>div:nth-of-type(2)": {
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    overflow: "hidden",
    backgroundColor: "#D9D9D9",
    boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
    position: "relative",
    marginLeft: "5px",
    "&>img": {
      width: "100%",
      borderRadius: "100%",
    },
  },
  "&>div:nth-of-type(3)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5px",
    "&>p:nth-of-type(1)": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#fff",
    },
  },
}));

const ProfileDetails = ({ data, userProfile }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userDetails.loginResponse);

  const handleCreateChat = () => {
    let chatDetails = {
      chatName: null,
      isGroup: false,
      userIds: [data.id],
    };
    dispatch(chatReq({ data: chatDetails, token: token }));
  };

  console.log(data);
  return (
    <React.Fragment>
      <MainBox onClick={() => handleCreateChat()}>
        <Box
          style={{
            backgroundColor: `${"#48B1C0"}`,
          }}
        ></Box>

        <Box>
          <img
            src={
              data?.image_url !== null && data?.image_url !== undefined
                ? data?.image_url
                : Person
            }
            alt="person"
          />
        </Box>
        <Box>
          <Typography>{data?.email}</Typography>
        </Box>
      </MainBox>
    </React.Fragment>
  );
};

export default ProfileDetails;
