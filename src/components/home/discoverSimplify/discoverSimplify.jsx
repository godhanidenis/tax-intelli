import React from "react";
import StartupsImage from "../../../assets/discoverSimplify/Startups.png";
import EnterprisesImage from "../../../assets/discoverSimplify/Enterprises.png";
import IndividualsImage from "../../../assets/discoverSimplify/Individuals.png";
import { Box, Typography } from "@mui/material";
import LandingPageTitleSection from "../../../shared/landingPageTitleSection/landingPageTitleSection";

const OfferingsData = [
  {
    image: IndividualsImage,
    title: "Individuals & NRIs",
    subTitle:
      "Hassle-free ITR filing, tax planning, and notice support—clear, quick, and expert-led",
  },
  {
    image: StartupsImage,
    title: "Startups & SMEs",
    subTitle:
      "From GST to bookkeeping, we manage your compliance so you can focus on growth",
  },
  {
    image: EnterprisesImage,
    title: "Enterprises & Corporates",
    subTitle:
      "Complete tax and ROC compliance, audits, and advisory—handled by experts, backed by tech",
  },
];

const DiscoverSimplify = () => {
  return (
    <LandingPageTitleSection
      buttonText="OUR OFFERINGS"
      text="Discover How We Simplify Compliance"
      subText="From individuals and NRIs to startups and enterprises, we deliver tailored, jargon-free compliance solutions."
    >
      <Box className="grid grid-cols-1 sm-500:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
        {OfferingsData.map(({ image, title, subTitle }, index) => (
          <Box
            key={index}
            className="rounded-[20px] bg-white p-4 md:p-6 flex flex-col gap-2 md:gap-4 shadow-[0px_8px_48px_0px_#0A3D2A14] h-full"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover rounded-xl"
            />

            <Typography className="!text-[22px] !leading-[32px] !font-bold !text-primary">
              {title}
            </Typography>
            <Typography className="!text-base">{subTitle}</Typography>
          </Box>
        ))}
      </Box>
    </LandingPageTitleSection>
  );
};

export default DiscoverSimplify;
