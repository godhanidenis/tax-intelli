import PropTypes from "prop-types";
import BackgroundImageWrapper from "../../components/Layout/BackgroundImageWrapper";

const ServiceBannerSection = ({ children }) => {
  return (
    <div className="custom-container h-[450px] px-4 sm:px-0">
      <BackgroundImageWrapper forServiceBanner={true}>
        {children}
      </BackgroundImageWrapper>
    </div>
  );
};

ServiceBannerSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ServiceBannerSection;
