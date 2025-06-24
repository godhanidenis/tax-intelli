import React from "react";
import { Box, Typography } from "@mui/material";
import TaxSolutionsImage from "../../../assets/taxSolutions.png";
import PlayIconCommonButton from "../../../shared/CommonButton/PlayIconCommonButton";
import playIcon from "../../../assets/playIconGreen.svg";

const TaxSolutions = () => {
  return (
    <Box className="grid gap-4 grid-cols-12 items-center custom-container p-4">
      {/* Left Text Section */}
      <Box className="col-span-12 lg-900:col-span-7 flex items-center lg-900:items-start justify-between h-full flex-col py-4 xl:py-0 gap-4 text-center lg-900:text-start">
        <Typography className="!font-bold !text-5xl lg:!text-6xl xl:!text-7xl xl:!leading-[82px] !text-primary">
          Smart Tax Solutions Tailored to Your Needs
        </Typography>

        <Typography className="!text-lg lg:!text-[22px] xl:!leading-8">
          Expert tax, GST, and ROC services—customised for individuals,
          startups, and enterprises.
        </Typography>

        <PlayIconCommonButton
          title="Explore Our Services"
          icon={playIcon}
          buttonVariant="outlined"
          textClass="text-primary text-base lg:text-lg font-medium"
          className="bg-white !text-primary !px-3 lg:!px-4 xl:!px-5 !py-2 lg:!py-3 xl:!py-4 !rounded-full !border-primary"
        />
      </Box>

      {/* Right Image/Illustration Section */}

      <Box className="col-span-12 lg-900:col-span-5">
        <img
          src={TaxSolutionsImage}
          alt="Smart Tax"
          className="w-[400px] h-[100%] lg-900:h-full lg-900:w-full mx-auto lg-900:mx-0"
        />
      </Box>
    </Box>
  );
};

export default TaxSolutions;
