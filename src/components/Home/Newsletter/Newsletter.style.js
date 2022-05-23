import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  newsletterSection: {
    margin: "0.6rem auto 0 !important",
    position: "relative",
    width: "70% !important",
    boxShadow:
      "0px 40px 80px rgba(0, 0, 0, 0.03), 0px 32px 46.8519px rgba(0, 0, 0, 0.0227778), 0px 15px 25.4815px rgba(0, 0, 0, 0.0182222)",
    padding: "3.5rem 3.4rem !important",
    borderRadius: "21px !important",
  },
  newsletterHeading: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    width: "67%",
  },
  newsletterDescription: {
    marginTop: "0.45rem !important",
    fontSize: "0.8rem !important",
    fontWeight: "600 !important",
    color: theme.palette.secondary.secondary,
  },
  newsletter_greyBg: {
    position: "absolute",
    width: "100%",
    height: "5rem",
    zIndex: "-1 !important",
    backgroundColor: "grey",
    top: "-2rem",
  },
}));
