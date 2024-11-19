import { createTheme } from "@mui/material";

export const innerTheme = createTheme({
  palette: {
    primary: {
      main: "#FA5805",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 451,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
