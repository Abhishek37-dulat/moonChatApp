import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography, styled } from "@mui/material";
// import InputBox from "../../reusableComponents/InputComponents/InputBox";
// import SelectBox from "../../reusableComponents/selectComponents/SelectBox";
// import { error } from "../../../modules/shared/Notifications";

const ExpenseBox = styled(Box)(({ theme }) => ({
  //   width: "1000px",
  padding: "20px",
  overflowY: "scroll", // Ensure the overflow property is set
  msOverflowStyle: "none", // IE and Edge
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // WebKit browsers (Chrome, Safari)
  },

  [theme.breakpoints.down("md")]: {},
}));

const DialogItem = styled(Dialog)(({ theme }) => ({
  "&>div": {
    "&>div": {
      borderRadius: "20px",
    },
  },

  [theme.breakpoints.down("md")]: {},
}));

const DialogActionsBox = styled(DialogActions)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
  "&>button:nth-of-type(1)": {
    backgroundColor: "#FF555D",
    "&>p": {
      color: "#fff",
      fontWeight: "300",
      textTransform: "capitalize",
    },
  },
  "&>button:nth-of-type(2)": {
    backgroundColor: "#4F75FE",
    marginRight: "50px",
    "&>p": {
      color: "#fff",
      fontWeight: "300",
      textTransform: "capitalize",
    },
  },
}));

const AreYouSure = ({ open, handleClose, shouldBe }) => {
  const handleDeleteExpense = (value) => {
    if (value) {
      shouldBe();
    } else {
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <DialogItem
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <ExpenseBox style={{ backgroundColor: "#1E1E1E" }}>
          <DialogTitle style={{ color: "#fff" }}>
            {"Are you sure, you want to Remove Expense"}🤬
          </DialogTitle>
          <DialogContent></DialogContent>
          <DialogActionsBox>
            <Button onClick={() => handleDeleteExpense(true)}>
              <Typography>Yes</Typography>
            </Button>
            <Button onClick={() => handleDeleteExpense(false)}>
              <Typography>No</Typography>
            </Button>
          </DialogActionsBox>
        </ExpenseBox>
      </DialogItem>
    </React.Fragment>
  );
};

export default AreYouSure;
