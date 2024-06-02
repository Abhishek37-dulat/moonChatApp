import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: "calc(100% - 80px)",
  minHeight: "40px",
  padding: "40px",
  backgroundColor: "#fff",
  position: "relative",
  boxShadow: "0px 10px 18px rgba(0,0,0,0.3)",
  borderRadius: "15px",
  "&>div": {
    "&>input": {
      minWidth: "500px",
      padding: "10px 20px",
      border: "none",
      outline: "none",
      fontFamily: '"Poppins", sans-serif',
    },
    "&>button": {
      "&>svg": {
        color: "#042A2B",
      },
    },
  },
}));

const ChatButton = () => {
  const [messageValue, setMessageValue] = useState("");
  const handleMessageValue = (e) => {
    e.preventDefault();
    setMessageValue(e.target.value);
  };
  return (
    <MainBox>
      <Box>
        <input
          type="text"
          value={messageValue}
          onChange={(e) => handleMessageValue(e)}
          placeholder="write something..."
        />
      </Box>
      <Box>
        <IconButton>
          <SendRoundedIcon />
        </IconButton>
      </Box>
    </MainBox>
  );
};

export default ChatButton;
