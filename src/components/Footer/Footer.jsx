import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { useStyles } from "./Footer.style";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Grid container style={{ width: "65%", margin: "auto" }}>
        <Grid item xs={12} md={6}>
          <div className={classes.footerLogoDiv}>
            <a href="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" className={classes.footerLogo}>
                SALT
              </Typography>
            </a>
          </div>
          <Typography className={classes.footerDescription}>
            Salt provides borderless banking and compliance solutions.
          </Typography>
          <Typography variant="h6" className={classes.footerCopyright}>
            Copyright © Poziom Ventures Pvt. Ltd.
            <br />
            <Link to={"/"} className={classes.footerCopyrightLink}>
              Disclaimer
            </Link>{" "}
            |&nbsp;
            <Link to={"/"} className={classes.footerCopyrightLink}>
              Privacy Policy
            </Link>{" "}
            |&nbsp;
            <Link to={"/"} className={classes.footerCopyrightLink}>
              Terms of Service
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.footerLinksContainer}>
          {/* Company Part */}
          <ul className={classes.footerLinks_ul}>
            <Typography variant="heading" className={classes.footer_heading}>
              Company
            </Typography>
            <li className={classes.footerLinks}>
              <a href="/">
                <Typography variant="description">About Us</Typography>
              </a>
            </li>
            <li className={classes.footerLinks}>
              <a href="/">
                <Typography variant="description">Blogs</Typography>
              </a>
            </li>
            <li className={classes.footerLinks}>
              <a href="/">
                <Typography variant="description">Careers</Typography>
              </a>
            </li>
            <li className={classes.footerLinks}>
              <a href="/">
                <Typography variant="description">contact@salt.pe</Typography>
              </a>
            </li>
          </ul>

          {/* Social part */}
          <ul className={classes.footerLinks_ul}>
            <Typography variant="heading" className={classes.footer_heading}>
              Add us to your life!
            </Typography>
            <li
              className={clsx(classes.footerLinks, classes.footerLinks_social)}
            >
              <a href="/">
                <FacebookIcon className={classes.footerLinks_icons} />
                <Typography
                  variant="description"
                  className={classes.footerLinks_socialHeading}
                >
                  Facebook
                </Typography>
              </a>
            </li>
            <li
              className={clsx(classes.footerLinks, classes.footerLinks_social)}
            >
              <a href="/">
                <TwitterIcon className={classes.footerLinks_icons} />
                <Typography
                  variant="description"
                  className={classes.footerLinks_socialHeading}
                >
                  Twitter
                </Typography>
              </a>
            </li>
            <li
              className={clsx(classes.footerLinks, classes.footerLinks_social)}
            >
              <a href="/">
                <LinkedInIcon className={classes.footerLinks_icons} />
                <Typography
                  variant="description"
                  className={classes.footerLinks_socialHeading}
                >
                  LinkedIn
                </Typography>
              </a>
            </li>
            <li
              className={clsx(classes.footerLinks, classes.footerLinks_social)}
            >
              <a href="/">
                <InstagramIcon className={classes.footerLinks_icons} />
                <Typography
                  variant="description"
                  className={classes.footerLinks_socialHeading}
                >
                  Instagram
                </Typography>
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
