import PropTypes from "prop-types";
import { Button } from "@mui/material";

const PlayIconCommonButton = ({
  title,
  type = "button",
  onClick,
  className,
  icon,
  textClass = "text-white",
  buttonVariant = "contained",
}) => {
  return (
    <Button
      sx={{ textTransform: "none" }}
      onClick={onClick}
      type={type}
      className={className}
      variant={buttonVariant}
    >
      <img className={textClass} src={icon} alt="playIcon" />
      <span className={`ml-1 ${textClass}`}>{title}</span>
    </Button>
  );
};

PlayIconCommonButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  textClass: PropTypes.string,
  buttonVariant: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};
export default PlayIconCommonButton;
