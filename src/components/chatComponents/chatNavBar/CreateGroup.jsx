import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, DialogActions, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { reqSearch } from "../../../redux/reducers/ducks/UsersDuck";
import SearchRounded from "@mui/icons-material/SearchRounded";
import UserForGroup from "./UserForGroup";
import { useState } from "react";
import { error, success } from "../../../modules/shared/Notifications";
import { chatReq } from "../../../redux/reducers/ducks/ChatDuck";

const SearchBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100% - 40px)",
    backgroundColor: "#16191C",
    padding: "10px 20px",
    borderRadius: "15px",
    boxShadow: "0px 5px 8px rgba(0,0,0,0.3)",
    "&>div:nth-of-type(1)": {
      //   border: "1px solid black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "80%",
      "&>input": {
        backgroundColor: "#16191C",
        width: "100%",
        padding: "10px 12px",
        border: "none",
        outline: "none",
        color: "#fff",
        fontFamily: '"Poppins", sans-serif',
      },
    },
    "&>div:nth-of-type(2)": {
      //   border: "1px solid black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "20%",
      "&>svg": {
        color: "#fff",
      },
    },
  },
}));

export default function FormDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [groupValue, setGroupValue] = useState("");
  const [checkBoxNumber, setCheckBoxNumber] = useState([]);
  const token = useSelector((state) => state.userDetails.loginResponse);
  const profileData = useSelector((state) => state.userDetails.userProfile);
  const allSearchUsers = useSelector((state) => state.userDetails.searchUser);
  const allusersData = useSelector((state) => state.userDetails.alluserData);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    dispatch(reqSearch({ token: token, query: searchValue }));
  };
  const handleRemoveCheck = () => {
    setCheckBoxNumber([]);
    setGroupValue("");
    handleClose();
  };
  const handleCreate = () => {
    if (groupValue === "") {
      error("Group Name is required");
    } else if (checkBoxNumber?.length < 1) {
      error("Please select at list 1  user");
    } else {
      let finalGroup = {
        chatName: groupValue,
        isGroup: true,
        userIds: checkBoxNumber,
      };
      dispatch(chatReq({ data: finalGroup, token: token }));
      setCheckBoxNumber([]);
      setGroupValue("");
      handleClose();
    }
  };
  console.log(allSearchUsers, checkBoxNumber);
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle>Create Group</DialogTitle>
        <DialogContent>
          <SearchBox>
            <Box>
              <Box>
                <input
                  placeholder="Enter Group Name"
                  value={groupValue}
                  onChange={(e) => setGroupValue(e.target.value)}
                />
              </Box>
            </Box>
          </SearchBox>
          <SearchBox>
            <Box>
              <Box>
                <input
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => handleSearchValue(e)}
                />
              </Box>
              <Box>
                <SearchRounded />
              </Box>
            </Box>
          </SearchBox>

          {allSearchUsers?.map((data, index) => {
            if (data?.id !== profileData?.id) {
              return (
                <UserForGroup
                  data={data}
                  key={index}
                  index={index}
                  checkBoxNumber={checkBoxNumber}
                  setCheckBoxNumber={setCheckBoxNumber}
                  userProfile={profileData}
                />
              );
            }
          })}
        </DialogContent>
        <DialogActions>
          <Button
            style={{ backgroundColor: "#E66045" }}
            onClick={handleRemoveCheck}
          >
            Close
          </Button>
          <Button style={{ backgroundColor: "#3765FC" }} onClick={handleCreate}>
            Create Group
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
