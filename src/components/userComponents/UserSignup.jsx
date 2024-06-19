import { useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { error } from "../../modules/shared/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/reducers/ducks/UsersDuck";

// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
import InputBox from "../reusableComponents/InputComponents/InputBox";

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
  height: "max-content",
  marginTop: "20px",
  borderRadius: "8px",
  boxShadow: "0px 10px 23px rgba(0,0,0,0.3)",
  backgroundColor: "rgba(30,30,30,0.73)",
  padding: "20px",
  marginBottom: "20px",
  "&>form": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.down("md")]: {},
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
  "&>p": {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
  },
  "&>div": {
    position: "absolute",
    top: "45px",
    left: "0px",
    width: "35px",
    height: "7px",
    borderRadius: "3px",
    backgroundColor: "#E3D79C",
  },
  [theme.breakpoints.down("md")]: {},
}));
const TwoBoxs = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100% ",
  // padding: "5px 20px",
  marginTop: "10px",
  [theme.breakpoints.down("md")]: {},
}));
const ButtonBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "calc(100% - 40px)",
  padding: "5px 20px",
  marginTop: "20px",
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
  [theme.breakpoints.down("md")]: {},
}));

const UserSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [validationCondition, setValidationCondition] = useState(false);
  const underprocess = useSelector((state) => state.userDetails.afterSignup);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationCondition(true);
    let ph_valid = true;
    if (phoneValue.length !== 10) {
      ph_valid = false;
      error("enter valid phone number");
      if (typeof parseInt(phoneValue) !== "number") {
        ph_valid = false;
        error("enter valid phone number");
      }
    }

    if (
      firstName === "" ||
      lastName === "" ||
      emailValue === "" ||
      passwordValue === "" ||
      confirmPasswordValue === "" ||
      phoneValue === ""
    ) {
      error("all fields are required!");
    } else if (passwordValue !== confirmPasswordValue) {
      error("password and comfirm password not match");
    } else {
      if (passwordValue === confirmPasswordValue) {
        if (
          firstName !== "" &&
          lastName !== "" &&
          emailValue !== "" &&
          passwordValue !== "" &&
          confirmPasswordValue !== "" &&
          phoneValue !== "" &&
          ph_valid === true
        ) {
          dispatch(
            registerUser({
              data: {
                first_name: firstName,
                last_name: lastName,
                email: emailValue,
                password: passwordValue,
                phone_number: phoneValue,
              },
            })
          );
        } else {
          error("all fields are required!");
        }
      } else {
        error("all fields are required!");
      }
    }
  };

  useEffect(() => {
    if (underprocess) {
      navigate("/underprocess");
    }
  }, [underprocess, navigate]);
  // console.log(underprocess);
  return (
    <MainBox>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <TitleBox>
            <TotalBox>
              <Typography>Signup</Typography>
              <Box></Box>
            </TotalBox>
          </TitleBox>
          <TwoBoxs>
            <InputBox
              inputValue={firstName}
              setInputValue={setFirstName}
              title="First Name"
              type="text"
              placeHolderValue="Enter first name"
              errorMessage="Please enter first name"
              validationCondition={validationCondition}
            />
            <InputBox
              inputValue={lastName}
              setInputValue={setLastName}
              title="Last Name"
              type="text"
              placeHolderValue="Enter last name"
              errorMessage="Please enter last name"
              validationCondition={validationCondition}
            />
          </TwoBoxs>
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
            inputValue={phoneValue}
            setInputValue={setPhoneValue}
            title="Phone number"
            type="text"
            placeHolderValue="Enter phone number"
            errorMessage="Please enter valid phone number"
            validationCondition={validationCondition}
          />
          <TwoBoxs>
            <InputBox
              inputValue={passwordValue}
              setInputValue={setPasswordValue}
              title="Create Password"
              type="password"
              placeHolderValue="Enter password"
              errorMessage="Please enter valid password"
              validationCondition={validationCondition}
            />
            <InputBox
              inputValue={confirmPasswordValue}
              setInputValue={setConfirmPasswordValue}
              title="Confirm Password"
              type="text"
              placeHolderValue="Enter confirm password"
              errorMessage="Please enter valid confirm password"
              validationCondition={validationCondition}
            />
          </TwoBoxs>
          <ButtonBox>
            <button type="submit">
              <Typography>Signup</Typography>
            </button>
            <Typography>
              Already have an account?{" "}
              <Typography variant="span" onClick={() => navigate("/login")}>
                signin now
              </Typography>
            </Typography>
          </ButtonBox>
        </form>
      </LoginBox>
    </MainBox>
  );
};

export default UserSignup;
