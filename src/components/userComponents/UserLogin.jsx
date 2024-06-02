import React, { useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { error } from "../../modules/shared/Notifications";
import { authorizeUser } from "../../redux/reducers/ducks/UsersDuck";
import InputBox from "../reusableComponents/InputComponents/InputBox";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "calc(100vh - 100px)",
  backgroundColor: "#042A2B",
}));
const LoginBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "698px",
  height: "516px",
  marginTop: "20px",
  borderRadius: "8px",
  boxShadow: "0px 10px 23px rgba(0,0,0,0.3)",
  backgroundColor: "rgba(30,30,30,0.73)",
  padding: "20px",
  "&>form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

const TotalBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginBottom: "40px",
  "&>p": {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
  },
  "&>div": {
    position: "absolute",
    top: "45px",
    left: "0px",
    width: "38px",
    height: "7px",
    borderRadius: "3px",
    backgroundColor: "#E3D79C",
  },
}));
const ButtonBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "calc(100% - 40px)",
  padding: "5px 20px",
  marginTop: "10px",
  "&>button": {
    width: "100% ",
    padding: "15px",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
    backgroundColor: "#E3D79C",
    cursor: "pointer",
    "&>p:nth-of-type(1)": {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1E1E1E",
    },
  },
  "&>p:nth-of-type(1)": {
    fontSize: "18px",
    fontWeight: "300",
    color: "#fff",
    marginTop: "10px",
    "&>span:nth-of-type(1)": {
      fontSize: "14px",
      fontWeight: "200",
      color: "#E3D79C",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [validationCondition, setValidationCondition] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationCondition(true);
    if (emailValue === "" || passwordValue === "") {
      error("email and password are required!");
    } else {
      // console.log({ data: { email: emailValue, password: passwordValue } });
      dispatch(
        authorizeUser({ data: { email: emailValue, password: passwordValue } })
      );
    }
  };

  return (
    <MainBox>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <TitleBox>
            <TotalBox>
              <Typography>Login</Typography>
              <Box></Box>
            </TotalBox>
          </TitleBox>
          <InputBox
            inputValue={emailValue}
            setInputValue={setEmailValue}
            title="Email"
            type="text"
            placeHolderValue="Enter Email address or username"
            errorMessage="Please enter valid email address"
            validationCondition={validationCondition}
          />
          <InputBox
            inputValue={passwordValue}
            setInputValue={setPasswordValue}
            title="Password"
            type="password"
            placeHolderValue="Enter password"
            errorMessage="Please enter valid password"
            validationCondition={validationCondition}
          />
          <ButtonBox>
            <button type="submit">
              <Typography>Login</Typography>
            </button>
            <Typography>
              don't have an account?{" "}
              <Typography variant="span" onClick={() => navigate("/signup")}>
                create new account
              </Typography>
            </Typography>
          </ButtonBox>
        </form>
      </LoginBox>
    </MainBox>
  );
};

export default UserLogin;
