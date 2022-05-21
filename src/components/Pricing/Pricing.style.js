import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  pricingSection: {
    position: "relative",
    margin: "5.6rem auto 0 !important",
    width: "90%",
    backgroundColor: "#f6f6f6",
    padding: "3.5rem 0",
  },
  pricingCard: {
    position: "relative",
    width: "75%",
    margin: "2rem 2rem 0 !important",
    padding: "4.4rem 2rem 0 !important",
    border: "1.5px solid" + theme.palette.primary.main,
    borderRadius: "20px !important",
    boxShadow: "7px 15px 20px rgba(0, 0, 0, 0.04) !important",
  },
  pricingHeading: {
    fontSize: "1.75rem !important",
    fontWeight: "600 !important",
    fontFamily: "'Inter', sans-serif !important",
    letterSpacing: "0.045em",
    color: theme.palette.secondary.main,
  },
  pricingDescription: {
    position: "relative",
    width: "35%",
    left: "50%",
    marginTop: "0.5rem !important",
    transform: "translateX(-50%)",
    textAlign: "center",
    fontSize: "0.77rem !important",
    fontWeight: "600 !important",
    color: theme.palette.secondary.secondary,
  },
  pricingCardImg: {
    width: "9rem",
    marginBottom: "0.5rem !important",
  },
  pricingCard_planHeading: {
    fontSize: "1.15rem !important",
    fontWeight: "700 !important",
  },
  cardPlanFeatures: {
    position: "relative",
    fontSize: "0.8rem !important",
    fontWeight: "500 !important",
    margin: "0.6rem 0 !important",
    color: theme.palette.secondary.secondary,
  },
  card_planPrice: {
    fontSize: "1.5rem !important",
    fontWeight: "700 !important",
    fontFamily: "'Inter', sans-serif !important",
    "& > span": {
      fontWeight: "500 !important",
    },
  },
}));
