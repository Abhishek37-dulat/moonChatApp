import { Box, Typography, styled } from "@mui/material";
import React from "react";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  minWidth: "300px",
  minHeight: "120px",
  padding: "20px",
  backgroundColor: "#E3D79C",
  position: "relative",
  boxShadow: "0px 3px 7px rgba(0,0,0,0.3)",
  "&>div": {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    width: "20px",
    height: "20px",
    borderRadius: "100%",
    backgroundColor: "#fff",
  },
  "&>p:nth-of-type(1)": {
    fontSize: "24px",
    fontWeight: "600",
  },
  "&>p:nth-of-type(2)": {
    fontSize: "12px",
    fontWeight: "200",
    color: "#696868",
  },
  "&>p:nth-of-type(3)": {
    fontSize: "20px",
    fontWeight: "600",
    color: "#01D649",
    marginTop: "20px",
  },
}));

const TotalUser = ({ cardExpense }) => {
  return (
    <MainBox>
      <Box></Box>
      <Typography>Total User</Typography>
      <Typography></Typography>
      <Typography>
        <b>$</b>
        {cardExpense}
      </Typography>
    </MainBox>
  );
};

export default TotalUser;
