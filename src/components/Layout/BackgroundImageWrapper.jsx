import PropTypes from "prop-types";
import { Box } from "@mui/material";

import headerBackgroundImage from "../../assets/HeaderBg.png";
import heroSectionBackgroundImage from "../../assets/Background.png";

const BackgroundImageWrapper = ({ forHeader = false, children }) => {
  const backgroundImage = forHeader
    ? headerBackgroundImage
    : heroSectionBackgroundImage;

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
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

BackgroundImageWrapper.propTypes = {
  forHeader: PropTypes.bool,
  children: PropTypes.node,
};

export default BackgroundImageWrapper;
