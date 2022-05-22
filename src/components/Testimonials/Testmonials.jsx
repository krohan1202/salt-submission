import React from "react";
import "./styles.css";

import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

import { useStyles } from "./Testimonials.style";

// Assets
import ProfileImg from "../../assets/Home/ProfileImg.png";
import StarIcon from "../../assets/Home/StarIcon.svg";

export default function Testmonials() {
  const classes = useStyles();

  //   paginationBulletRender: function (swiper, index, className) {
  //     return '< div class=" '+ className +' ">< div class="inner-dot">< /div>< /div>';
  //   }

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

        <Container>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            // autoplay={{
            //   delay: 4800,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay, FreeMode, Pagination]}
            className={classes.mySwiper}
          >
            <SwiperSlide>
              <Card className={classes.testimonialsCard}>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <img
                    src={ProfileImg}
                    alt="Profile"
                    className={classes.testimonialsCardImg}
                  />
                  <div style={{ width: "50%" }}>
                    <Typography
                      variant="h4"
                      className={classes.testimonialsCardName}
                    >
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
                    <Typography
                      variant="h4"
                      className={classes.testimonialsCardRating}
                    >
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                  elit accumsan, urna nibh nibh et tortor ut enim. Consectetur
                  est est tellus semper luctus. Auctor eget pellentesque at ut
                  sed tincidunt nulla nisl.
                </Typography>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Container>
      </Container>
    </div>
  );
}
