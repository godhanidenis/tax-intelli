import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const OfferCard = ({
  mainTitle,
  description,
  list = [],
  isLeftImage = true,
  imageSrc,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
      <div
        className={`flex justify-center ${
          isLeftImage
            ? "order-1 lg:order-1 lg:justify-start"
            : "order-1 lg:order-2 lg:justify-end"
        }`}
      >
        <img
          src={imageSrc}
          alt="Illustration"
          className="w-full max-w-md rounded-xl"
        />
      </div>

      <div
        className={`lg:mt-6 text-center lg:text-start ${
          isLeftImage ? "order-2 lg:order-2" : "order-2 lg:order-1"
        }`}
      >
        <h2 className="text-3xl font-bold text-[#081617] mb-4">{mainTitle}</h2>
        <p className="text-[#516060] mb-6">{description}</p>
        <ul className="space-y-4 w-fit mx-auto lg:mx-0">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-left sm:text-center lg:text-left"
            >
              <TaskAltIcon className="text-primary" fontSize="small" />
              <span className="ml-3 text-[#414D48]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

OfferCard.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  isLeftImage: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
};

export default OfferCard;
