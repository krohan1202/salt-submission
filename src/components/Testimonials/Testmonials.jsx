import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";

import TestimonialCard from "./TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./swiperStyles.css"; // Overiding styles of default swiper components

import { useStyles } from "./Testimonials.style";

export default function Testmonials() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const classes = useStyles();
  const slidesNum = 3;

  return (
    <div className={classes.testimonialsSection}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          className={classes.testimonialsHeading}
        >
          Trusted by Thousands of Happy Customers
        </Typography>
        <Typography className={classes.testimonialsDescription}>
          Let’s choose a package that is best for you and explore it happily and
          cheerfully
        </Typography>

        <Container style={{ marginTop: "3.5rem" }}>
          <Swiper
            slidesPerView={isDesktop ? 3 : 1}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4800,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
          >
            {[...Array(slidesNum)].map((elementInArray, index) => {
              return (
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Container>
    </div>
  );
}
