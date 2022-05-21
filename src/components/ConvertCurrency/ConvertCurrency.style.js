import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  currencySection: {
    position: "relative",
    boxShadow:
      "2px 2px 70px rgba(0, 0, 0, 0.05), 0px 47.0588px 95px rgba(0, 0, 0, 0.03), 0px 37.6471px 55.1198px rgba(0, 0, 0, 0.0227778), 0px 17.6471px 29.9782px rgba(0, 0, 0, 0.0182222)",
    marginBottom: "10vw !important",
    padding: "3.2rem 6rem 2.5rem !important",
    borderRadius: "44px !important",
  },
  currency_amountHeading: {
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
    color: theme.palette.secondary.secondary,
  },
  currency_amountTextField: {
    marginTop: "0.8rem !important",
    fontSize: "2.1rem !important",
  },
  currency_currencyDropdownItems: {
    fontSize: "1.4rem !important",
    fontWeight: "600 !important",
    color: "#434343 !important",
    fontFamily: "'HK Grotesk', sans-serif !important",
  },
  currency_select: {
    height: 40,
    fontSize: "2rem !important",
    fontWeight: "800 !important",
    color: "#434343 !important",
    fontFamily: "'HK Grotesk', sans-serif !important",
    marginTop: "3.5vw !important",
    marginLeft: "1.5rem !important",
    "& .MuiSvgIcon-root": {
      color: "#434343 !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  },
  currency_arrowIcon: {
    position: "relative",
    padding: "0.5rem",
    borderRadius: "50%",
    top: "55%",
    background: "rgba(30, 94, 243, 0.07)",
  },
  currency_conversionRateHeading: {
    fontSize: "1.18rem !important",
    fontWeight: "600 !important",
    color: theme.palette.primary.main,
    marginLeft: "1rem !important",
  },
}));
