import PropTypes from "prop-types";
import { Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const RightIconCommonButton = ({ title, onClick = () => {} }) => {
  return (
    <Button
      sx={{ textTransform: "none" }}
      className="!text-white !bg-primary flex justify-start items-center gap-3 !rounded-full !px-3 md:!px-4 !py-2 md:!py-3"
      onClick={onClick}
    >
      <span className="text-white">{title}</span>
      <EastIcon className="bg-tertiary text-primary p-1.5 rounded-full !h-8 !w-8" />
    </Button>
  );
};

RightIconCommonButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default RightIconCommonButton;
