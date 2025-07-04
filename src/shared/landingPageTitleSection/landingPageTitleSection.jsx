import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const LandingPageTitleSection = ({
  buttonText,
  text,
  subText,
  children,
  sliderUi,
  needMB = true,
}) => {
  return (
    <Box
      className="custom-container"
      px={2}
      display="flex"
      flexDirection="column"
      gap={2}
      mb={needMB ? 7 : 0}
      sx={{
        alignItems: {
          xs: "center",
          sm: sliderUi ? "flex-start" : "center",
        },
      }}
    >
      <Box
        // variant="contained"
        className="font-semibold text-sm leading-6 bg-tertiary text-primary px-4 py-2 rounded-full select-none"
      >
        {buttonText}
      </Box>

      {sliderUi ? (
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center sm:text-start">
          <Typography className="!text-primary !font-bold !text-5xl">
            {text}
          </Typography>
          <Typography className="!leading-8">{subText}</Typography>
        </Box>
      ) : (
        <Box
          maxWidth={696}
          display="flex"
          flexDirection="column"
          gap={3}
          textAlign="center"
        >
          <Typography className="!text-primary !font-bold !text-4xl sm-500:!text-5xl">
            {text}
          </Typography>
          <Typography className="!text-lg px-[18px]">{subText}</Typography>
        </Box>
      )}

      <Box width="100%">{children}</Box>
    </Box>
  );
};
LandingPageTitleSection.propTypes = {
  buttonText: PropTypes.string.isRequired,
  text: PropTypes.string,
  subText: PropTypes.string,
  children: PropTypes.any,
  sliderUi: PropTypes.bool,
  needMB: PropTypes.bool,
};
export default LandingPageTitleSection;
