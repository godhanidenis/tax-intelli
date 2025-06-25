import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import TaxIntelliLogo from "../../assets/TaxIntelliLogo.png";
import XIcon from "../../assets/socialMedia/x.png";
import InstagramIcon from "../../assets/socialMedia/instagram.png";
import YoutubeIcon from "../../assets/socialMedia/youtube.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const menuItems = {
    "Privacy Policy": "Privacy Policy",
    "Terms of Service": "Terms of Service",
    "Contact Us": "Agent Builder",
  };

  const socialMediaIcons = [
    { src: XIcon, alt: "X logo" },
    { src: InstagramIcon, alt: "Instagram logo" },
    { src: YoutubeIcon, alt: "YouTube logo" },
  ];

  return (
    <div className="flex justify-between items-center flex-col gap-6 w-full custom-container p-4">
      <img
        src={TaxIntelliLogo}
        className="h-[37px] w-[145px] sm:hidden cursor-pointer"
        draggable="false"
        alt="logo picture"
      />
      <div className="flex justify-between items-center flex-row lg:gap-8 sm:gap-4 gap-2 w-full">
        <img
          src={TaxIntelliLogo}
          className="h-[37px] w-[145px] hidden sm:flex cursor-pointer"
          draggable="false"
          alt="logo picture"
          onClick={() => navigate("/")}
        />

        <Box className="lg:gap-6 gap-3 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-center !flex-wrap">
          {Object.keys(menuItems).map((item, index) => (
            <Typography
              key={index}
              variant="body1"
              component="span"
              className="cursor-pointer hover:!text-primary duration-300 !text-base !leading-5 select-none"
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Stack
          className="lg:gap-8 md:gap-6 sm:gap-4 gap-3"
          direction="row"
          justifyContent="center"
          justifyItems="center"
        >
          {socialMediaIcons.map((icon, index) => (
            <Box key={index}>
              <img
                src={icon.src}
                alt={icon.alt}
                className="cursor-pointer hover:scale-105 duration-300 transition-all !h-6 !w-6"
                draggable="false"
                onClick={() => navigate("/")}
              />
            </Box>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Footer;
