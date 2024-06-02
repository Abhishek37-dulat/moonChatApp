import { Box, styled } from "@mui/material";
import { lazy, useState } from "react";
import TotalUser from "./TotalUser";
import ChatButton from "./ChatButton";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "calc(100% - 80px)",
  minHeight: "calc(100vh - 200px)",
  padding: "40px",
  "&>div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "calc(100% - 80px)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(100% - 20px)",
    padding: "10px",
    alignItems: "center",
  },
}));

const HomePage = () => {
  const [cardExpense, setCardExpense] = useState(0);
  return (
    <MainBox>
      <Box>
        <TotalUser cardExpense={cardExpense} />
      </Box>
      <Box>
        <ChatButton />
      </Box>
    </MainBox>
  );
};

export default HomePage;
