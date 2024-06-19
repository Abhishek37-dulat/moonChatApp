import React, { useContext, useEffect, useState } from "react";
import { styled, Box, Typography, IconButton } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import menuimg from "../../assets/menu.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
  changeNavDilog,
  handleLogoutRequest,
} from "../../redux/reducers/ducks/UsersDuck";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#042A2B",
}));

const LoginBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
const LogoBox = styled(Box)(({ theme }) => ({
  position: "relative",
  marginLeft: "20px",
  "&>p": {
    fontSize: "56px",
    fontWeight: "bold",
    color: "#fff",
  },
  "&>div": {
    position: "absolute",
    top: "26px",
    left: "99px",
    width: "25px",
    height: "30px",
    borderRadius: "100%",
    backgroundColor: "#E3D79C",
  },
}));

const LandingPage = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));
const LandingLogoBox = styled(Box)(({ theme }) => ({
  position: "relative",
  marginLeft: "20px",
  "&>p": {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  "&>div": {
    position: "absolute",
    top: "17px",
    left: "63px",
    width: "17px",
    height: "19px",
    borderRadius: "100%",
    backgroundColor: "#E3D79C",
    [theme.breakpoints.down("sm")]: {
      top: "8px",
      left: "31px",
      width: "10px",
      height: "10px",
    },
  },
}));

const LandingUserBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "20px",
}));

const Item1 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "136px",
  height: "60px",
  backgroundColor: "#fff",
  borderRadius: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "96px",
    height: "40px",
  },
  "&>div:nth-of-type(1)": {
    "&>img": {
      width: "42px",
    },
  },
  "&>div:nth-of-type(2)": {
    "&>div": {
      backgroundColor: "#696868",
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      marginRight: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "0.4s",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        width: "35px",
        height: "35px",
      },
      "&:hover": {
        backgroundColor: "#E3D79C",
      },
      "&>p": {
        fontSize: "24px",
        fontWeight: "600",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px",
        },
      },
    },
  },
}));

const Item2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  alignItems: "center",
  marginRight: "20px",
  "&>button": {
    "&>p": {
      fontSize: "24px",
      color: "#fff",
      marginRight: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    "&>svg": {
      fontSize: "24px",
      color: "#fff",
      fontWeight: "600",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
  },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  width: "100%",
  height: "100px",
  boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
  "&>input": {
    padding: "20px 50px",
    fontFamily: '"Poppins", sans-serif',
    color: "#010101",
    width: "400px",
    marginLeft: "20px",
    border: "none",
    outline: "none",
  },
  "&>button": {
    marginRight: "20px",
    "&>svg": {
      color: "#000",
      fontSize: "24px",
    },
  },
}));

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [searchCondition, setSearchCondition] = useState(false);
  const navrole = useSelector(
    (state) => state.userDetails.currentNavModel
  ).payload;
  // const searchCondition = useSelector(
  //   (state) => state.expenseDetails.searchCondition
  // );
  const userData = useSelector((state) => state.userDetails.userProfile);
  const token = useSelector((state) => state.userDetails.loginResponse);

  const handleLogout = () => {
    dispatch(handleLogoutRequest());
    navigate("/login");
  };

  useEffect(() => {
    const path = window.location.pathname;
    console.log(path);
    if (path.includes("profile")) {
      dispatch(changeNavDilog("TYPE_PROFILE"));
    }
    if (path.includes("expense")) {
      dispatch(changeNavDilog("TYPE_LANDING"));
    }
  }, [dispatch, navrole, navigate]);
  console.log(searchCondition, searchValue);
  return (
    <MainBox
      sx={{
        height: `${navrole === "TYPE_AUTH" ? "100px" : "0px"}`,
        display: `${navrole !== "TYPE_AUTH" && "none"}`,
      }}
    >
      {navrole === "TYPE_AUTH" && (
        <LoginBox>
          <LogoBox>
            <Typography>MOONCHATAPP</Typography>
            <Box></Box>
          </LogoBox>
        </LoginBox>
      )}
    </MainBox>
  );
};

export default NavBar;
