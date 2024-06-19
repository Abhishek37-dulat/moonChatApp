import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCsv,
  faFileLines,
  faFilePdf,
  faImage,
  faMicrophoneLines,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100% - 40px)",
  height: "calc(100vh - 40px)",
  padding: "20px",
  backgroundColor: "#16191C",
  overflow: "hidden",
}));

const Item1 = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  "&>p:nth-of-type(1)": {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "600",
  },
  "&>p:nth-of-type(2)": {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "200",
  },
}));
const Item2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  marginTop: "200px",
  marginBottom: "200px",
}));
const BoxItem1 = styled(Box)(({ theme }) => ({
  border: "1px dashed #fff",
  position: "absolute",
  top: "50%",
  left: "calc(50% - 180px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "140px",
  minHeight: "170px",
  borderWidth: "3px",
  padding: "20px 20px",
  borderRadius: "15px",
  backgroundColor: "#1E2126",
  boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
  "&>div:nth-of-type(1)": {
    marginTop: "20px",
    "&>p": {
      color: "#fff",
      textAlign: "start",
    },
  },
  "&>div:nth-of-type(2)": {
    marginTop: "40px",
    "&>input": {
      border: "none",
      outline: "none",
      borderRadius: "8px",
      width: "120px",
      height: "20px",
      padding: "10px 15px",
    },
    "&>svg": {
      color: "#fff",
      boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
      fontSize: "24px",
      margin: "10px",
    },
  },
}));
const BoxItem2 = styled(Box)(({ theme }) => ({
  border: "1px dashed #fff",
  position: "absolute",
  top: "calc(50% - 170px)",
  left: "calc(50% - 120px)",
  rotate: "-20deg",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "140px",
  minHeight: "170px",
  borderWidth: "3px",
  padding: "20px 20px",
  borderRadius: "15px",
  backgroundColor: "#1E2126",
  boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
  "&>div:nth-of-type(1)": {
    marginTop: "20px",
    "&>p": {
      color: "#fff",
      textAlign: "start",
    },
  },
  "&>div:nth-of-type(2)": {
    marginTop: "40px",
    "&>input": {
      border: "none",
      outline: "none",
      borderRadius: "8px",
      width: "120px",
      height: "20px",
      padding: "10px 15px",
    },
    "&>svg": {
      color: "#fff",
      boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
      fontSize: "24px",
      margin: "10px",
    },
  },
}));
const BoxItem3 = styled(Box)(({ theme }) => ({
  border: "1px dashed #fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  rotate: "-20deg",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "140px",
  minHeight: "170px",
  borderWidth: "3px",
  padding: "20px 20px",
  borderRadius: "15px",
  backgroundColor: "#1E2126",
  boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
  "&>div:nth-of-type(1)": {
    marginTop: "20px",
    "&>p": {
      color: "#fff",
      textAlign: "start",
    },
  },
  "&>div:nth-of-type(2)": {
    marginTop: "40px",
    "&>input": {
      border: "none",
      outline: "none",
      borderRadius: "8px",
      width: "120px",
      height: "20px",
      padding: "10px 15px",
    },
    "&>svg": {
      color: "#fff",
      boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
      fontSize: "24px",
      margin: "10px",
    },
  },
}));
const Item3 = styled(Box)(({ theme }) => ({
  //   border: "1px solid red",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "100px",
  "&>div:nth-of-type(1)": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "20px",
    "&>p": {
      color: "#fff",
      textAlign: "start",
    },
    "&>button": {
      border: "none",
      outline: "none",
      borderRadius: "8px",
      padding: "10px 15px",
      marginLeft: "10px",
      cursor: "pointer",
      boxShadow: "0p 0px 3px rgba(0,0,0,0.3)",
    },
  },
}));

const InitialPage = () => {
  return (
    <MainBox>
      <Item1>
        <Typography>Start talking with your friends and family</Typography>
        <Typography>What's new here?</Typography>
      </Item1>
      <Item2>
        <BoxItem2>
          <Box>
            <Typography>Start Sharing Files</Typography>
          </Box>
          <Box>
            <FontAwesomeIcon icon={faFilePdf} />
            <FontAwesomeIcon icon={faFileCsv} />
            <FontAwesomeIcon icon={faFileLines} />
          </Box>
        </BoxItem2>
        <BoxItem1>
          <Box>
            <Typography>Write message</Typography>
          </Box>
          <Box>
            <input placeholder="write here..." />
          </Box>
        </BoxItem1>
        <BoxItem3>
          <Box>
            <Typography>Start sending images, video and audio</Typography>
          </Box>
          <Box>
            <FontAwesomeIcon icon={faImage} />
            <FontAwesomeIcon icon={faVideo} />
            <FontAwesomeIcon icon={faMicrophoneLines} />
          </Box>
        </BoxItem3>
      </Item2>
      <Item3>
        <Box>
          <Typography>Start sending images, video and audio</Typography>
          <button>click here</button>
        </Box>
      </Item3>
    </MainBox>
  );
};

export default InitialPage;
