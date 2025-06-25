import PropTypes from "prop-types";
import { Box } from "@mui/material";
import headerBackgroundImage from "../../assets/HeaderBg.png";
import heroSectionBackgroundImage from "../../assets/Background.png";
import ServicesBanner from "../../assets/ServicesBanner.png";

const BackgroundImageWrapper = ({
  forHeader = false,
  forHeroSection = false,
  forServiceBanner = false,
  children,
}) => {
  const backgroundImage = forHeader
    ? headerBackgroundImage
    : forHeroSection
    ? heroSectionBackgroundImage
    : forServiceBanner
    ? ServicesBanner
    : "";

  return (
    <Box
      sx={{
        ...(forHeader && {
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(6px)",
        }),
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: forServiceBanner ? "start" : "center",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

BackgroundImageWrapper.propTypes = {
  forHeader: PropTypes.bool,
  forHeroSection: PropTypes.bool,
  forServiceBanner: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default BackgroundImageWrapper;
