import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Person from "../../../assets/avatar-design.png";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useDispatch } from "react-redux";
import { getCurrentUserMessageReq } from "../../../redux/reducers/ducks/ChatDuck";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
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

  "&:hover": {
    backgroundColor: "#3765FC",
    // rotate: "z 20deg",
    transform: "rotate(5deg)",
  },
  "&>div:nth-of-type(1)": {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    "&>div:nth-of-type(1)": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      // width: "100%",
      "&>div:nth-of-type(1)": {
        minWidth: "10px",
        minHeight: "10px",
        boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
        borderRadius: "100%",
        margin: "10px",
        marginLeft: "5px",
      },
      "&>div:nth-of-type(2)": {
        // border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          position: "relative",
          "&>img": {
            width: "100%",
            borderRadius: "100%",
          },
        },
        "&>div:nth-of-type(2)": {
          // border: "1px solid black",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          overflow: "hidden",
          backgroundColor: "#D9D9D9",
          boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
          position: "relative",
          "&>img": {
            width: "100%",
            borderRadius: "100%",
          },
        },
        "&>div:last-child": {
          // border: "1px solid black",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "100%",
          overflow: "hidden",
          backgroundColor: "#1E2126",
          boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
          position: "relative",
          "&>svg": {
            color: "#fff",
            padding: "20px 0px",
          },
        },
      },
      "&>div:nth-of-type(3)": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // width: "100%",
        marginLeft: "10px",
        "&>p:nth-of-type(1)": {
          color: "#fff",
          fontWeight: "500",
        },
        "&>p:nth-of-type(2)": {
          color: "#fff",
          fontWeight: "100",
          fontSize: "10px",
          marginTop: "5px",
        },
      },
    },
    "&>div:nth-of-type(2)": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      "&>p:nth-of-type(1)": {
        color: "#fff",
        fontWeight: "100",
        fontSize: "10px",
      },
    },
  },
  "&>div:nth-of-type(2)": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: "30px",
    marginTop: "10px",
    "&>p:nth-of-type(1)": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
    },
  },
  "&>div:nth-of-type(3)": {
    // border: "1px solid black",
    position: "absolute",
    bottom: "-5px",
    right: "-5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#48B1C0",
    width: "20px",
    height: "20px",
    borderRadius: "3px",
    boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
    "&>p:nth-of-type(1)": {
      fontSize: "10px",
      fontWeight: "200",
      color: "#fff",
    },
  },
}));

const UserDesign = ({ data, userProfile }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(0);
  const [time, setTime] = useState("");

  const handleMessages = () => {
    dispatch(getCurrentUserMessageReq(data));
  };

  useEffect(() => {
    const date1 = new Date(data?.messages[data?.messages?.length - 1]?.sentAt);
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
    console.log(days, diffString);
    setDate(days);
    setTime(diffString);
  }, [data]);

  console.log(
    data,
    userProfile,
    data?.messages[data?.messages?.length - 1],
    date,
    time
  );
  return (
    <React.Fragment>
      <MainBox onClick={() => handleMessages()}>
        <Box>
          <Box>
            <Box
              style={{
                backgroundColor: `${"#48B1C0"}`,
              }}
            ></Box>

            <Box>
              {data?.users?.length > 0 &&
                data?.users?.slice(0, 3)?.map((item, index) => {
                  if (userProfile?.id && item?.id !== userProfile?.id) {
                    return (
                      <Box>
                        <img
                          src={
                            item?.image_url !== null &&
                            item?.image_url !== undefined
                              ? item?.image_url
                              : Person
                          }
                          alt="person"
                        />
                      </Box>
                    );
                  } else {
                    return;
                  }
                })}
            </Box>
            <Box>
              <Typography>
                {data?.users?.length === 2 &&
                  data?.users?.map((item, index) => {
                    if (userProfile?.id && item?.id !== userProfile?.id) {
                      return (
                        <Typography>
                          {item?.email?.length > 12
                            ? item?.email?.slice(0, 12) + "..."
                            : item?.email?.slice(0, 12)}
                        </Typography>
                      );
                    } else {
                      return;
                    }
                  })}
                {data?.users?.length > 2 && (
                  <Typography>
                    {data?.chat?.chatName !== null
                      ? data?.chat?.chatName
                      : "Group Chat"}
                  </Typography>
                )}
              </Typography>
              <Typography>
                {date > 0 && date} {time && date >= 0 ? time : ""}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography>{time && date >= 0 ? time : ""}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>message</Typography>
        </Box>
      </MainBox>
    </React.Fragment>
  );
};

export default UserDesign;
