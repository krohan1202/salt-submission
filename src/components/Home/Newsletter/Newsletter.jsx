import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

import { useStyles } from "./Newsletter.style";

export default function Newsletter() {
  const classes = useStyles();

  return (
    <>
      <div style={{ position: "relative", height: "15rem" }}>
        <Container maxWidth="xl" className={classes.newsletterSection}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Typography variant="h2" className={classes.newsletterHeading}>
                Subscribe Now for Get Special Features!
              </Typography>
              <Typography className={classes.newsletterDescription}>
                Banking, but seasoned with SALT.
              </Typography>
            </Grid>
            <Grid item sm={12} md={6} align="right">
              <Button
                variant="contained"
                style={{
                  positon: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                Subscribe Now!
              </Button>
            </Grid>
          </Grid>
        </Container>
        {/* <div className={classes.newsletter_greyBg}></div> */}
      </div>
    </>
  );
}
