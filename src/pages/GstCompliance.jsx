import IntroSection from "../shared/ServiceSection/IntroSection";
import accountingLeftImage from "../assets/gstCompliancePage/accountingLeftImage.png";
import GSTCancelImage from "../assets/gstCompliancePage/GSTCancel.png";
import GSTUpdateImage from "../assets/gstCompliancePage/GSTUpdate.png";
import newGSTImage from "../assets/gstCompliancePage/newGST.png";
import professionalsIcon from "../assets/incomeTexpage/Professionals.svg";
import buissnessIcon from "../assets/incomeTexpage/buissnessIcon.svg";
import companiesIcon from "../assets/incomeTexpage/companies.svg";
import investorsIcon from "../assets/incomeTexpage/Investors.svg";
import ServiceDetail from "../shared/ServiceSection/ServiceDetail";
import BackgroundImageWrapper from "../components/Layout/BackgroundImageWrapper";
import LandingPageTitleSection from "../shared/landingPageTitleSection/landingPageTitleSection";
import { Box, Typography } from "@mui/material";
import AIIcon from "../assets/AIIcon.png";
import ServiceBannerSection from "../shared/ServiceSection/ServiceBannerSection";
import RightIconCommonButton from "../shared/CommonButton/RightIconCommonButton";

const introDetail = {
  smallTitle: "Stay compliant. Avoid penalties. File on time",
  bigTitle: "GST Compliance & Advisory",
  description: `We help businesses of all sizes manage GST with ease. From registration to return filing and audit support, we take care of everything.`,
};

const serviceDetail = {
  leftImage: accountingLeftImage,
  mainTitle: (
    <>
      Our GST services are <br className="hidden sm:inline" /> perfect for
    </>
  ),
  userTypes: [
    {
      icon: professionalsIcon,
      alt: "E-commerce",
      title: "🛒 E-commerce Sellers",
      description: "Online sellers on platforms like Amazon, Flipkart, etc.",
    },
    {
      icon: buissnessIcon,
      alt: "Freelancers",
      title: "💼 Freelancers & Consultants",
      description: "Independent professionals offering services across domains",
    },
    {
      icon: companiesIcon,
      alt: "Manufacturers",
      title: "🏭 Manufacturers & Traders",
      description: "Product-based businesses handling production and supply",
    },
    {
      icon: investorsIcon,
      alt: "Exporters",
      title: "🌍 Exporters & Service Providers",
      description:
        "Businesses serving global clients or cross-border operations",
    },
  ],
};

const OfferingsData = [
  {
    image: newGSTImage,
    title: "New GST Registration",
    subTitle:
      "We help you register under the right GST category with complete, error-free filing",
  },
  {
    image: GSTUpdateImage,
    title: "Amendments & Updates",
    subTitle:
      "We handle changes to your business details like address, contact info, or bank accounts",
  },
  {
    image: GSTCancelImage,
    title: "Cancellation & Revocation",
    subTitle:
      "We assist with closing your GST account or revoking cancellations done by the department",
  },
];

const smartBusinessData = [
  {
    title: "End-to-end service",
    subTitle: "From registration to audit",
  },
  {
    title: "Expert team",
    subTitle: "Work handled by experienced professionals",
  },
  {
    title: "Timely filing",
    subTitle: "We remind you before every due date",
  },
  {
    title: "Affordable plans",
    subTitle: "Choose a plan that fits your needs",
  },
];

const GstCompliance = () => {
  return (
    <>
      <BackgroundImageWrapper forHeroSection={true}>
        <div className="py-12 px-4 sm:px-6 lg:px-12">
          <IntroSection {...introDetail} />
        </div>
      </BackgroundImageWrapper>

      <ServiceDetail {...serviceDetail} />

      <LandingPageTitleSection
        buttonText="Quick, Hassle-Free, and Accurate"
        text="GST Registration"
        subText="From getting your GSTIN to managing updates and cancellations, we simplify the entire registration journey so you can stay compliant without stress"
      >
        <Box className="grid grid-cols-1 sm-500:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {OfferingsData.map(({ image, title, subTitle }, index) => (
            <Box
              key={index}
              className="rounded-[20px] bg-white p-4 md:p-6 flex flex-col gap-2 md:gap-4 shadow-[0px_8px_48px_0px_#0A3D2A14] h-full"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover rounded-xl"
              />

              <Typography className="!text-[22px] !leading-[32px] !font-bold !text-primary">
                {title}
              </Typography>
              <Typography className="!text-base">{subTitle}</Typography>
            </Box>
          ))}
        </Box>
      </LandingPageTitleSection>

      <LandingPageTitleSection
        buttonText="TRUST CENTER"
        text="Why Smart Businesses Choose Us"
        subText="Experience hassle-free financial management with tech-powered services, personalized expert support, and clear, upfront pricing—trusted by startups, SMEs, and professionals across India."
        sliderUi={true}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 mt-8">
          {smartBusinessData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-[0px_8px_48px_0px_#0A3D2A14] rounded-[20px] p-6 flex flex-col gap-2"
            >
              <img src={AIIcon} alt="AIIcon" className="h-8 w-8" />

              <Typography className="!text-[22px] !text-primary !leading-8 !font-bold">
                {item?.title}
              </Typography>
              <Typography className="!font-medium !text-sm !leading-6">
                {item?.subTitle}
              </Typography>
            </div>
          ))}
        </div>
      </LandingPageTitleSection>
      <ServiceBannerSection>
        <div className="flex items-center justify-center flex-col w-full h-full gap-4 sm:gap-8">
          <Typography className="!font-bold !text-2xl sm:!text-3xl lg:!text-4xl !text-white text-center !mx-20 sm:!mx-24">
            Let Us Handle Your GST the Right Way
          </Typography>
          <Typography className="!text-base sm:!text-lg !text-white !text-center !mx-20 sm:!mx-24">
            Stay compliant. Avoid late fees. Claim every credit
          </Typography>
          <RightIconCommonButton title="Start GST Filing" />
        </div>
      </ServiceBannerSection>
    </>
  );
};

export default GstCompliance;
