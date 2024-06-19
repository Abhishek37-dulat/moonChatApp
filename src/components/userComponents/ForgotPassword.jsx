import { lazy, useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { forEach } from "lodash";
import InputBox from "../reusableComponents/InputComponents/InputBox";
import { error } from "../../modules/shared/Notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  forgetPassword,
  resetInitialPasswordState,
  updatePassword,
} from "../../redux/reducers/ducks/UsersDuck";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "calc(100vh - 100px)",
  backgroundColor: "#042A2B",
  [theme.breakpoints.down("md")]: {},
}));
const LoginBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "698px",
  minHeight: "516px",
  marginTop: "20px",
  marginBottom: "20px",
  borderRadius: "8px",
  boxShadow: "0px 10px 23px rgba(0,0,0,0.3)",
  backgroundColor: "rgba(30,30,30,0.73)",
  padding: "20px",
  [theme.breakpoints.down("md")]: {},
  "&>form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    "&>p": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: "18px",
      fontWeight: "500",
      color: "#E3D79C",
      width: "100%",
      marginLeft: "40px",
      marginTop: "20px",
    },
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {},
}));

const TotalBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginBottom: "40px",
  [theme.breakpoints.down("md")]: {},
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
  [theme.breakpoints.down("md")]: {},
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

const DashLayer = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100% - 40px)",
  padding: "5px 20px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {},
}));

const DashBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "3px",
  width: "20px",
  height: "1.5px",
  margin: "3px",
  [theme.breakpoints.down("md")]: {},
}));

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState("");
  const [codeValue, setCodeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [validationCondition, setValidationCondition] = useState(false);
  const [validationReset, setValidationReset] = useState(false);
  // const [codeCondition, setCodeCondition] = useState(true);
  const codeCondition = useSelector((state) => state.userDetails.verifyEmail);
  const isCodeVerified = useSelector(
    (state) => state.userDetails.passwordResetSuccess
  );
  let widthdash = 761;
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationCondition(true);
    if (emailValue === "") {
      error("Email is required!");
    } else {
      dispatch(forgetPassword({ email: emailValue }));
    }
  };
  const handleReset = (e) => {
    e.preventDefault();
    setValidationReset(true);
    if (
      passwordValue === "" ||
      confirmPasswordValue === "" ||
      codeValue === ""
    ) {
      error("please provide all valid values");
    } else if (passwordValue !== confirmPasswordValue) {
      error("password and confirm password should match");
    } else {
      if (
        passwordValue !== "" ||
        confirmPasswordValue !== "" ||
        codeValue !== ""
      ) {
        dispatch(
          updatePassword({
            param: { email: codeCondition },
            data: {
              forgotPasswordCode: codeValue,
              password: passwordValue,
            },
          })
        );
      }
    }
  };

  useEffect(() => {
    if (isCodeVerified) {
      const resetpassword = new Promise((resolve, reject) => {
        if (isCodeVerified) {
          setTimeout(() => {
            resolve();
          }, 2000);
        } else {
          reject();
        }
      });
      resetpassword.then(() => {
        dispatch(resetInitialPasswordState());
        navigate("/login");
      });
    }
  }, [isCodeVerified, navigate, dispatch]);
  console.log(codeCondition);
  return (
    <MainBox>
      <LoginBox>
        {codeCondition === "" ? (
          <form onSubmit={handleSubmit}>
            <TitleBox>
              <TotalBox>
                <Typography>Forgot Password</Typography>
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
            <ButtonBox>
              <button type="submit">
                <Typography>Forgot Password</Typography>
              </button>
              <Typography>
                Got Password?{" "}
                <Typography variant="span" onClick={() => navigate("/login")}>
                  back to login
                </Typography>
              </Typography>
            </ButtonBox>
          </form>
        ) : (
          <form onSubmit={handleReset}>
            <TitleBox>
              <TotalBox>
                <Typography>Forgot Password</Typography>
                <Box></Box>
              </TotalBox>
            </TitleBox>
            <InputBox
              inputValue={codeValue}
              setInputValue={setCodeValue}
              title="Verification Code"
              type="text"
              placeHolderValue="Enter code"
              errorMessage="Please enter verification code"
              validationCondition={validationReset}
            />
            <Typography>New Password</Typography>
            <DashLayer>
              {Array.from({ length: widthdash / 20 }, (_, index) => {
                return <DashBox key={index}></DashBox>;
              })}
            </DashLayer>
            <InputBox
              inputValue={passwordValue}
              setInputValue={setPasswordValue}
              title="Create Password"
              type="password"
              placeHolderValue="Enter password"
              errorMessage="Please enter valid password"
              validationCondition={validationReset}
            />
            <InputBox
              inputValue={confirmPasswordValue}
              setInputValue={setConfirmPasswordValue}
              title="Confirm Password"
              type="text"
              placeHolderValue="Enter confirm password"
              errorMessage="Please enter valid confirm password"
              validationCondition={validationReset}
            />
            <ButtonBox>
              <button type="submit">
                <Typography>Change Password</Typography>
              </button>
              <Typography>
                Got Password?{" "}
                <Typography variant="span" onClick={() => navigate("/login")}>
                  back to login
                </Typography>
              </Typography>
            </ButtonBox>
          </form>
        )}
      </LoginBox>
    </MainBox>
  );
};

export default ForgotPassword;
