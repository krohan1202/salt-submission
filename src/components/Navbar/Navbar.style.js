import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "relative",
    width: "78%",
    margin: "0 auto",
    padding: "1.1vw 0 1rem 0",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
  },
  navLogo: {
    cursor: "pointer",
    position: "relative",
    fontSize: "2.45rem !important",
    top: "9%",
    fontFamily: "'Megrim', sans-serif !important",
    fontWeight: "700 !important",
    display: "inline",
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("sm")]: {
      width: "33vw",
      left: "4vw",
      top: "0.5vw",
    },
  },
  allNavLinks: {
    position: "relative",
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    "& > ul": {
      display: "flex",
      justifyContent: "space-between",
      listStyleType: "none",
    },
  },
  allNavLinks_left: {
    width: "40%",
    marginLeft: "1.2vw",
  },
  allNavLinks_right: {
    width: "23%",
  },
  navItems: {
    color: theme.palette.secondary.main,
    position: "relative",
    display: "block",
    top: "50%",
    transform: "translateY(-50%)",
    textDecoration: "none",
    flexGrow: 1,
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
