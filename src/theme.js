import { createTheme, responsiveFontSizes } from "@mui/material";

// For custom theme in MUI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1E5EF3" }, // primary blue
    secondary: {
      main: "#161616", // black
      secondary: "#8f8f8f", // grey
    }, // black
    alternate: { main: "#fff" }, // white
    background: {
      default: "#fff",
    },
  },
  typography: {
    h2: {
      fontFamily: "'HK Grotesk', 'Montserrat', Helvetica, sans-serif",
      fontWeight: "500",
    },
    body: {
      fontWeight: "400",
    },
    fontFamily: ['"HK Grotesk", "Montserrat", sans-serif'],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          textTransform: "none",
          fontSize: "0.8rem !important",
          fontFamily: "'HK Grotesk', sans-serif",
          fontWeight: "700",
          margin: "0 0.6rem 0 1.5rem",
          borderRadius: "100rem",
          padding: "0.4rem 1.67rem",
          border: "2.5px solid #1E5EF3",
          backgroundColor: "transparent",
          color: "#1E5EF3",
          cursor: "pointer",
          "&:hover": {
            color: "#fff",
            backgroundColor: "#1E5EF3",
            border: "2.5px solid #1E5EF3",
          },
        },
        contained: {
          textTransform: "none",
          fontFamily: "'HK Grotesk', sans-serif",
          fontWeight: "700",
          cursor: "pointer",
          padding: "0.65rem 3.34rem",
          background: "#1E5EF3",
          border: "2px solid #1E5EF3",
          boxShadow:
            "0px 126.415px 150.943px rgba(30, 94, 243, 0.07), 0px 81.9357px 88.3997px rgba(30, 94, 243, 0.0531481), 0px 6px 48.0783px rgba(30, 94, 243, 0.2), 0px 25.283px 24.5283px rgba(30, 94, 243, 0.12), 0px 10.3005px 12.2991px rgba(30, 94, 243, 0.04), 0px 2.34102px 5.9399px rgba(30, 94, 243, 0.14)",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
