import { createTheme, responsiveFontSizes } from "@mui/material";

// For custom theme in MUI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2163FF" }, // primary blue
    secondary: {
      main: "#222222",
      secondary: "grey",
    }, // black
    alternate: { main: "#fff" }, // white
    background: {
      default: "#fff",
    },
  },
  typography: {
    h2: {
      fontFamily: "'Stolzl', 'Montserrat', Helvetica, sans-serif",
      fontWeight: "500",
    },
    body: {
      fontWeight: "400",
    },
    fontFamily: ['"Euclid Circular A", "Montserrat", sans-serif'],
  },
  button: {
    textTransform: "none",
    fontFamily: "'Euclid Circular A', sans-serif",
    cursor: "pointer",
    borderRadius: "50px",
    // glowy
  },
  color: {
    main: "#2163FF", // primary blue
    secondary: "#222222",
  },
});

export default responsiveFontSizes(theme);
