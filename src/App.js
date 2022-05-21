import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme.js";
import RouteComponent from "./Routes.js";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteComponent />
    </ThemeProvider>
  );
}

export default App;
