import React from "react";
import { Typography, Card } from "@mui/material";

import { useStyles } from "./Testimonials.style";

// Assets
import ProfileImg from "../../assets/Home/ProfileImg.png";
import StarIcon from "../../assets/Home/StarIcon.svg";

export default function TestimonialCard() {
  const classes = useStyles();

  return (
    <Card className={classes.testimonialsCard}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <img
          src={ProfileImg}
          alt="Profile"
          className={classes.testimonialsCardImg}
        />
        <div style={{ width: "50%" }}>
          <Typography variant="h4" className={classes.testimonialsCardName}>
            Vizet Robert
          </Typography>
          <Typography
            variant="h6"
            className={classes.testimonialsCardDesignation}
          >
            Arsaw, Poland
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography variant="h4" className={classes.testimonialsCardRating}>
            4.5
          </Typography>
          <img
            src={StarIcon}
            alt="Profile"
            className={classes.testimonialsCard_starIcon}
          />
        </div>
      </div>
      <Typography className={classes.testimonialsCardDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac elit
        accumsan, urna nibh nibh et tortor ut enim. Consectetur est est tellus
        semper luctus. Auctor eget pellentesque at ut sed tincidunt nulla nisl.
      </Typography>
    </Card>
  );
}
