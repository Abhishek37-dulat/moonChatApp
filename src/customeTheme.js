import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ssm: 500,
      sm: 600,
      msm: 700,
      lsm: 800,
      md: 900,
      lmd: 1024,
      slg: 1100,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#1e1e1e",
    },
    secondary: {
      main: "#f1f1f1",
    },
    plain: {
      main: "#ffffff",
    },
    mainpoint: {
      main: "#536DFE",
    },
    secmainpoint: {
      main: "#0078F5",
    },
    profilebackground: {
      main: "#208E69",
    },
    backColor: {
      main: "#f6f6f6",
    },
    activeProduct: {
      main: "#FBE2DE",
    },
    inactiveProduct: {
      main: "#E5D6EB",
    },
    deletedProduct: {
      main: "#C8E9E4",
    },
    deleteColor: {
      main: "#E65B65",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

export default customTheme;
