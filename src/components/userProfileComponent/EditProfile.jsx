import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, styled } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqProfileUpdate } from "../../redux/reducers/ducks/UsersDuck";

const ProfileForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "calc(100% - 40px)",
  height: "calc(100vh - 40px)",
  padding: "20px",
  "&>form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    "&>input": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "calc(100% - 40px)",
      padding: "20px",
      backgroundColor: "#1E2126",
      marginTop: "10px",
      border: "none",
      outline: "none",
      borderRadius: "8px",
      boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
      color: "#fff",
    },
  },
}));

export default function EditProfile({ open, handleClose, data }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userDetails.loginResponse);
  const [scroll, setScroll] = useState("paper");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleUpdate = () => {
    let userDetails = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    };
    dispatch(reqProfileUpdate({ data: userDetails, token: token }));
  };
  useEffect(() => {
    setFirstName(data?.first_name);
    setLastName(data?.last_name);
    setPhoneNumber(data?.phone_number);
  }, []);
  return (
    <React.Fragment>
      {/* <Button>scroll=paper</Button> */}
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullWidth={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Edit Profile</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          ></DialogContentText>
          <ProfileForm>
            <form onSubmit={handleUpdate}>
              <input
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </form>
          </ProfileForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
