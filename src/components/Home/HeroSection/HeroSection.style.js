import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  heroContainer: {
    marginTop: "4vw",
    width: "78% !important",
    padding: "0 !important",
  },
  heroHeading: {
    position: "relative",
    marginTop: "1.7vw !important",
    fontSize: "3.1rem !important",
    fontWeight: "800 !important",
    width: "80% !important",
    lineHeight: "1.05 !important",
  },
  heroDescription: {
    position: "relative",
    width: "62% !important",
    lineHeight: "1.35 !important",
    marginTop: "2vw !important",
    fontSize: "1rem !important",
    fontWeight: "600 !important",
  },
  heroBtnDiv: {
    position: "relative",
    marginTop: "3.6vw !important",
  },
  heroImg: {
    position: "relative",
    width: "76%",
    verticalAlign: "middle",
  },
}));
