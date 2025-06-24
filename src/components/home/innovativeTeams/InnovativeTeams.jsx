import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AcmeIMage from "../../../assets/innovativeTeams/acme.png";
import CelestialIMage from "../../../assets/innovativeTeams/celestial.png";
import PulseIMage from "../../../assets/innovativeTeams/pulse.png";
import QuanTrumIMage from "../../../assets/innovativeTeams/quanTrum.png";

const images = [
  { src: AcmeIMage, alt: "acme png" },
  { src: CelestialIMage, alt: "celestial png" },
  { src: PulseIMage, alt: "pulse png" },
  { src: QuanTrumIMage, alt: "quanTrum png" },
  { src: AcmeIMage, alt: "acme png" },
  { src: PulseIMage, alt: "pulse png" },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1180 },
    items: 6,
  },
  miniDesktop: {
    breakpoint: { max: 1180, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 630 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 630, min: 430 },
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 430, min: 0 },
    items: 1,
  },
};

const InnovativeTeams = () => {
  return (
    <Stack className="md:gap-7 sm:gap-5 gap-4" justifyContent="center" mb={7}>
      <Typography className="!text-base !leading-[26px] text-center ">
        Trusted by top innovative teams:
      </Typography>

      <Carousel
        responsive={responsive}
        autoPlaySpeed={2000}
        arrows={false}
        showDots={false}
        customTransition="all 0.5s ease"
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        infinite
        pauseOnHover
        autoPlay
        shouldResetAutoplay={false}
        ssr={true}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            position="relative"
            width="auto"
            className="!select-none cursor-grab"
          >
            <img
              src={image.src}
              alt={image.alt}
              draggable="false"
              className="h-[30px] w-[112px]  mx-auto"
            />
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
};

export default InnovativeTeams;
