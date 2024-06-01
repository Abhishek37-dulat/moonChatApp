import { Box, Typography, styled } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
import car from "../assets/loading_img.png";

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#042A2B",
}));
const LogoBox = styled(Box)(({ theme }) => ({
  position: "relative",
  marginLeft: "100px",
  marginTop: "100px",
  "&>p": {
    fontSize: "56px",
    fontWeight: "bold",
    color: "#fff",
  },
  "&>div": {
    position: "absolute",
    top: "29px",
    left: "105px",
    width: "25px",
    height: "26px",
    borderRadius: "100%",
    backgroundColor: "#E3D79C",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  "&>img": {
    position: "absolute",
    top: "100px",
    left: "300px",
    width: "400px",
  },
  "&>div": {
    position: "absolute",
    top: "270px",
    left: "300px",
    width: "400px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "rgba(277,215,156,0.3)",
  },
}));

const Loading = () => {
  const imgRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    let leftposcar = 20;
    let leftposbox = 20;
    const carFunction = () => {
      leftposcar += 1;
      leftposbox += 2;
      if (leftposcar < 40 && leftposbox > 40) {
        leftposbox = 40;
      }
      if (leftposcar > 40) {
        leftposcar = 20;
        leftposbox = 20;
      }
      imgRef.current.style.left = `${leftposcar}%`;
      boxRef.current.style.left = `${leftposbox}%`;
    };
    const intervalId = setInterval(carFunction, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <MainBox>
      <LogoBox>
        <Typography>MOONEXPENSE</Typography>
        <Box></Box>
      </LogoBox>
      <ImageBox>
        <Box ref={boxRef}></Box>
        <img ref={imgRef} src={car} alt="car" />
      </ImageBox>
    </MainBox>
  );
};

export default Loading;
