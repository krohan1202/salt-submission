import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./HeroSection.style";

//Asset
import HeroBg from "../../../assets/Home/HeroBg.png";

export default function HeroSection() {
  const classes = useStyles();

  return (
    <>
      {/* Hero Part */}
      <Container maxWidth="l" className={classes.heroContainer}>
        <Grid container>
          <Grid item sm={12} md={6}>
            <Typography variant="h2" className={classes.heroHeading}>
              Not your average banking experience.
            </Typography>
            <Typography className={classes.heroDescription}>
              Banking, but seasoned with SALT. <br />
              We deal with all things related to global business banking so that
              you don't have to.
            </Typography>
            <div className={classes.heroBtnDiv}>
              <Link to="/get-started">
                <Button variant="contained">Get Started!</Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <img src={HeroBg} alt="HeroBg" className={classes.heroImg} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
