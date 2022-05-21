import React from "react";
import { Typography, Button } from "@mui/material";
import { useStyles } from "./Navbar.style.js";

export default function Navbar() {
  const classes = useStyles();

  return (
    // Navbar
    <nav className={classes.navbar}>
      <span>
        <a href="/" style={{ textDecoration: "none" }}>
          <Typography className={classes.navLogo}>SALT</Typography>
        </a>
      </span>

      <div className={classes.allNavLinks}>
        <ul className={classes.allNavLinks_left}>
          <li>
            <a className={classes.navItems} href="/">
              About
            </a>
          </li>
          <li>
            <a className={classes.navItems} href="/">
              Features
            </a>
          </li>
          <li>
            <a className={classes.navItems} href="/">
              Pricing
            </a>
          </li>
          <li>
            <a className={classes.navItems} href="/">
              Testimonials
            </a>
          </li>
          <li>
            <a className={classes.navItems} href="/">
              Help
            </a>
          </li>
        </ul>

        <ul className={classes.allNavLinks_right}>
          <li>
            <a
              href="/login"
              className={classes.navItems}
              style={{ fontWeight: "700" }}
            >
              Login
            </a>
          </li>
          <li>
            <a href="/get-started" style={{ textDecoration: "none" }}>
              <Button variant="outlined">Get Started</Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
