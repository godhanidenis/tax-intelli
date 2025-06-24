import { Box, Typography } from "@mui/material";
import PlayIconCommonButton from "../CommonButton/PlayIconCommonButton";
import playIcon from "../../assets/playIconGreen.svg";
import PropTypes from "prop-types";

const IntroSection = ({ smallTitle, bigTitle, description }) => {
  return (
    <Box className="flex flex-col gap-6 items-center justify-center">
      <Typography className="!font-bold !text-[22px] !text-primary text-center">
        {smallTitle}
      </Typography>

      <Typography className="!font-bold !text-5xl lg:!text-6xl xl:!text-7xl xl:!leading-[82px] !text-primary text-center">
        {bigTitle}
      </Typography>

      <Typography className="!text-lg !leading-8 max-w-[1080px] w-full text-center">
        {description}
      </Typography>

      <div className="flex gap-4 sm:gap-12 flex-col sm:flex-row">
        <PlayIconCommonButton
          title="Talk to an Expert"
          icon={playIcon}
          buttonVariant="outlined"
          textClass="text-primary text-base lg:text-lg font-medium"
          className="bg-white !text-primary !px-3 lg:!px-4 xl:!px-5 !py-2 lg:!py-3 xl:!py-4 !rounded-full !border-primary"
        />

        <PlayIconCommonButton
          title="Explore Our Services"
          textClass="text-primary text-base lg:text-lg font-medium text-white"
          className="!bg-primary hover:!bg-secondary duration-300 !py-2 lg:!py-2.5 !px-4 !rounded-full text-lg"
        />
      </div>
    </Box>
  );
};

IntroSection.propTypes = {
  smallTitle: PropTypes.string.isRequired,
  bigTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default IntroSection;
