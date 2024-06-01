import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "calc(100% - 40px)",
  padding: "5px 20px",
  marginTop: "10px",
  "&>p:nth-of-type(1)": {
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
  },
  "&>div": {
    width: "100%",
    position: "relative",
    "&>input": {
      width: "calc(100% - 40px)",
      padding: "20px",
      border: "none",
      outline: "none",
      borderRadius: "8px",
      boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
      fontFamily: '"Poppins", sans-serif',
      color: "#010101",
      fontWeight: "200",
      marginTop: "8px",
    },
    "&>button": {
      position: "absolute",
      top: "17px",
      right: "12px",
    },
  },

  "&>p:nth-of-type(2)": {
    fontSize: "12px",
    fontWeight: "200",
    color: "#FF555D",
    marginTop: "10px",
  },
}));

const InputBox = ({
  inputValue = "",
  setInputValue,
  title,
  type,
  placeHolderValue,
  errorMessage,
  inputHeight,
  validationCondition,
}) => {
  const navigate = useNavigate();
  const [pass, setPass] = useState(type);
  const [passCon, setPassCon] = useState(true);
  return (
    <MainBox>
      <Typography>{title}</Typography>
      <Box>
        <input
          style={{
            paddingTop: `${inputHeight ? inputHeight : "20px"}`,
            paddingBottom: `${inputHeight ? inputHeight : "20px"}`,
          }}
          type={pass}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeHolderValue}
        />
        {title === "Password" &&
          (passCon ? (
            <IconButton
              onClick={() => {
                setPass("text");
                setPassCon(false);
              }}
            >
              <VisibilityOffRoundedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setPass("password");
                setPassCon(true);
              }}
            >
              <VisibilityRoundedIcon />
            </IconButton>
          ))}
      </Box>
      {validationCondition && inputValue === "" && (
        <Typography>{errorMessage}</Typography>
      )}
      {title === "Password" && (
        <Typography
          style={{
            color: "#E3D79C",
            textDecoration: "underline",
            marginLeft: "85%",
            cursor: "pointer",
          }}
          onClick={() => navigate("/forgotpassward")}
        >
          forgot password
        </Typography>
      )}
    </MainBox>
  );
};

export default InputBox;
