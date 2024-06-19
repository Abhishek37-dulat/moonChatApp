import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Person from "../../../assets/avatar-design.png";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid #fff",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  width: "calc(100% - 40px)",
  padding: "20px 20px",
  position: "relative",
  marginTop: "5px",

  "&>div:nth-of-type(1)": {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "max-content",
    "&>div:nth-of-type(2)": {
      // border: "1px solid black",
      width: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "100%",
      overflow: "hidden",
      "&>img": {
        width: "100%",
        borderRadius: "100%",
      },
    },

    "&>div:nth-of-type(1)": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      marginLeft: "30px",
      marginTop: "10px",
      width: "max-content",
      "&>div:nth-of-type(1)": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        backgroundColor: "#1E2126",
        borderRadius: "15px",
        padding: "10px 20px",
        maxWidth: "250px",
        boxShadow: "0px 0px 5px rgba(255,252,252,0.5)",
        "&>p:nth-of-type(1)": {
          fontSize: "12px",
          fontWeight: "500",
          color: "#FF9833",
          textAlign: "start",
        },
        "&>p:nth-of-type(2)": {
          fontSize: "16px",
          fontWeight: "400",
          color: "#fff",
          textAlign: "start",
        },
      },
      "&>div:nth-of-type(2)": {
        marginTop: "10px",
        "&>p:nth-of-type(1)": {
          fontSize: "12px",
          fontWeight: "200",
          color: "#fff",
        },
      },
    },
  },
}));

const SenderDesign = ({ message, user }) => {
  const [date, setDate] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const date1 = new Date(message?.sentAt);
    const date2 = new Date();

    const differenceInMillis = date2 - date1;

    const totalSeconds = Math.floor(differenceInMillis / 1000);
    const seconds = totalSeconds % 60;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;

    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;

    const days = Math.floor(totalHours / 24);
    let diffString = "";
    if (hours < 1) {
      diffString = `${minutes.toString().padStart(2, "0")} m ${seconds
        .toString()
        .padStart(2, "0")} s`;
      setDate(days);
      setTime(diffString);
    } else {
      diffString = `${hours.toString().padStart(2, "0")} h`;
    }
    setDate(days);
    setTime(diffString);
  }, [message]);

  return (
    <MainBox>
      <Box>
        <Box>
          <Box>
            <Typography>You</Typography>
            <Typography>{message?.messageText}</Typography>
          </Box>
          <Box>
            <Typography>
              {time} {date > 0 ? message?.sentAt?.slice(0, 10) : "Today"}
            </Typography>
          </Box>
        </Box>
        <Box>
          <img src={Person} alt="person" />
        </Box>
      </Box>
    </MainBox>
  );
};

export default SenderDesign;
