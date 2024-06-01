import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faPersonBreastfeeding,
  faPersonMilitaryPointing,
  faPills,
  faPlateWheat,
  faRoad,
  faVestPatches,
} from "@fortawesome/free-solid-svg-icons";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "calc(100% - 40px)",
  padding: "0px 20px",
  marginTop: "10px",
  "&>p:nth-of-type(1)": {
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
  },
  "&>div": {
    width: "100%",
    position: "relative",
    "&>div": {
      width: "100%",
      border: "none",
      outline: "none",
      fontFamily: '"Poppins", sans-serif',
      color: "#010101",

      fontWeight: "200",
      marginTop: "8px",
      boxShadow: "none",
      "&>div": {
        width: "100%",
        border: "none",
        outline: "none",
        backgroundColor: "#fff",
        padding: "0px 20px",
        borderRadius: "8px",
        fontFamily: '"Poppins", sans-serif',
        "&>div": {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        },
      },
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

const selectiveValue = [
  {
    itemvalue: "food",
    fonticon: faPlateWheat,
    title: "Food",
    color: "#FF7801",
  },
  {
    itemvalue: "medical",
    fonticon: faPills,
    title: "Medical",
    color: "#FF555D",
  },
  {
    itemvalue: "cloth",
    fonticon: faVestPatches,
    title: "Cloth",
    color: "#9F3CFE",
  },
  {
    itemvalue: "transport",
    fonticon: faRoad,
    title: "Transport",
    color: "#4F75FE",
  },
  {
    itemvalue: "other",
    fonticon: faPersonMilitaryPointing,
    title: "Other",
    color: "#042A2B",
  },
];

const SelectBox = ({
  inputValue = "",
  setInputValue,
  title,
  placeHolderValue,
  errorMessage,
  validationCondition,
}) => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event);
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  return (
    <MainBox>
      <Typography>{title}</Typography>
      <Box>
        <FormControl>
          <Select value={inputValue} onChange={handleChange} displayEmpty>
            <MenuItem value="">
              <em>none</em>
            </MenuItem>
            {selectiveValue?.map((data, index) => {
              return (
                <MenuItem key={index} value={`${data.itemvalue}`}>
                  <Box
                    style={{
                      backgroundColor: `${data.color}`,
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
                      borderRadius: "3px",
                      marginRight: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{ color: "#fff" }}
                      icon={data.fonticon}
                    />
                  </Box>
                  <Typography>{data.title}</Typography>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      {validationCondition && inputValue === "" && (
        <Typography>{errorMessage}</Typography>
      )}
    </MainBox>
  );
};

export default SelectBox;
