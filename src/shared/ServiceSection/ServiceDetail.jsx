import PropTypes from "prop-types";

const ServiceDetail = ({ leftImage, mainTitle, userTypes }) => {
  return (
    <div className="custom-container px-4 !mb-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Left Image and Tag  */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <img
          src={leftImage}
          alt="Professional"
          className="rounded-lg w-[34rem] md:w-94 h-auto mx-auto lg:mx-0 mix-blend-multiply"
        />
      </div>

      {/* Right Text Content  */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-[#0A3D2A] text-center sm:text-start">
          {mainTitle}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {userTypes.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src={item.icon} alt={item.alt} className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-black ">{item.title}</h3>
                <p className="text-[#414D48] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ServiceDetail.propTypes = {
  leftImage: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  userTypes: PropTypes.array.isRequired,
};

export default ServiceDetail;
