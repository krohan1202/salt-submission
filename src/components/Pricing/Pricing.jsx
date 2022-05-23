import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { pricingDetails } from "./PricingTiers";

// Assets
import CardImg from "../../assets/Home/CardImg.png";
import FeatureTickIcon from "../../assets/Home/FeatureTickIcon.svg";

import { useStyles } from "./Pricing.style";

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.pricingSection}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          className={classes.pricingHeading}
        >
          Choose Your Plan
        </Typography>
        <Typography className={classes.pricingDescription}>
          Let’s choose a package that is best for you and explore it happily and
          cheerfully
        </Typography>

        {/* Pricing Cards */}
        <Grid container align="center">
          {pricingDetails.map((tier, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card align="center" className={classes.pricingCard}>
                  <img
                    src={CardImg}
                    alt="cardImg"
                    className={classes.pricingCardImg}
                  />
                  <CardContent>
                    <Typography
                      variant="h2"
                      className={classes.pricingCard_planHeading}
                    >
                      {tier.title}
                    </Typography>
                    <ul
                      style={{
                        margin: "3rem 0",
                        padding: "0 0.5rem",
                      }}
                    >
                      {/* Features */}
                      {tier.description.map((line) => (
                        <Typography
                          align="left"
                          key={line}
                          className={classes.cardPlanFeatures}
                        >
                          <img
                            src={FeatureTickIcon}
                            alt="tickIcon"
                            style={{ paddingRight: "0.5rem" }}
                          />
                          {line}
                        </Typography>
                      ))}
                    </ul>
                    <Typography className={classes.card_planPrice}>
                      {tier.price}
                      {tier.price !== "Free" && <span>/mo</span>}
                    </Typography>
                    <Link to={"/signup"} style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        style={{
                          padding: "0.4rem 2.3rem",
                          margin: "0.8rem 0 1rem",
                        }}
                      >
                        Sign up
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
