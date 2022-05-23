import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    marginTop: "auto",
    width: "100%",
    height: "55vh",
    paddingTop: "2rem !important",
    backgroundColor: theme.palette.background.secondary,
  },
  footerLinksContainer: {
    position: "relative",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "84%",
    },
  },
  footerLogo: {
    cursor: "pointer",
    position: "relative",
    fontSize: "2.8rem !important",
    top: "9%",
    fontFamily: "'Megrim', sans-serif !important",
    fontWeight: "500 !important",
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("sm")]: {
      width: "33vw",
      left: "4vw",
      top: "0.5vw",
    },
  },
  footerDescription: {
    position: "relative",
    width: "60%",
    fontSize: "1.17rem !important",
    fontWeight: "500 !important",
    color: "#434343",
  },
  footerCopyright: {
    position: "relative",
    marginTop: "1.5rem !important",
    fontSize: "0.85rem !important",
    fontWeight: "500 !important",
    color: "#434343",
  },
  footerCopyrightLink: {
    textDecoration: "none",
    color: "#434343",
  },
  footerLinks_ul: {
    position: "relative",
    width: "13vw",
    paddingLeft: "3vw",
    marginLeft: "3vw",
    listStyleType: "none",
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
      width: "9rem",
      paddingLeft: "0",
    },
  },
  footer_heading: {
    color: theme.palette.secondary.main,
    fontWeight: "800 !important",
    fontSize: "1.08rem",
    display: "block",
    marginBottom: "1rem !important",
  },
  footerLinks: {
    position: "relative",
    fontSize: "1.05rem",
    color: "#434343 !important",
    margin: "0.45rem 0",
    cursor: "pointer",
    fontWeight: "500 !important",

    "& > a": {
      color: "#434343",
      textDecoration: "none",
      verticalAlign: "middle",
      "&:hover": {
        fontWeight: "800 !important",
      },
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
      left: "0",
    },
  },
  footerLinks_social: {
    margin: "0.32rem 0",
  },
  footerLinks_icons: {
    verticalAlign: "middle",
    marginRight: "0.5rem !important",
    fontSize: "1.7rem !important",
    marginBottom: "0.2rem !important",
  },
  footerLinks_socialHeading: {
    fontSize: "1.07rem !important",
  },
}));
