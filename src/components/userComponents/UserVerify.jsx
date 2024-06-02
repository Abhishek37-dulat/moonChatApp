import React, { useEffect } from "react";
import { styled, Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userVerification } from "../../redux/reducers/ducks/UsersDuck";

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
    "&>p": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      // textAlign: "center",
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      width: "100%",
      marginTop: "20px",
      "&>p": {
        display: "flex",
        justifyContent: "flex-start",
        marginRight: "5px",
        "&>p": { marginLeft: "5px" },
      },
    },
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

const UserVerify = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const userVerified = useSelector((state) => state.userDetails.isVerified);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    dispatch(userVerification({ id: id }));
  };
  useEffect(() => {
    if (userVerified) {
      navigate("/login");
    }
  }, [userVerified, navigate]);
  return (
    <MainBox>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <TitleBox>
            <TotalBox>
              <Typography>Verify yourself</Typography>
              <Box></Box>
            </TotalBox>
          </TitleBox>
          <Typography>
            <Typography>
              Account
              <Typography
                style={{
                  color: "#E3D79C",
                }}
              >
                Abhishek11906997dulat@gmail.com
              </Typography>
            </Typography>
            verify this under moonexpense monitoring.
          </Typography>
          <Typography>Thank You for we part of us!</Typography>
          <ButtonBox>
            <button type="submit">
              <Typography>Verify me</Typography>
            </button>
          </ButtonBox>
        </form>
      </LoginBox>
    </MainBox>
  );
};

export default UserVerify;
