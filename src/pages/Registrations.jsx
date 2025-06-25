import IntroSection from "../shared/ServiceSection/IntroSection";
import accountingLeftImage from "../assets/registrationsPage/accountingLeftImage.png";
import entityRegistrationImage from "../assets/registrationsPage/entityRegistration.png";
import IECImage from "../assets/registrationsPage/IEC.png";
import taxRegistrationsImage from "../assets/registrationsPage/taxRegistrations.png";
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
  smallTitle: "Start right. Stay legal. Grow fast.",
  bigTitle: "Registrations & Licences",
  description:
    "We help you get the right registrations and licences for your business. From company setup to legal approvals, we take care of it all.",
};

const serviceDetail = {
  leftImage: accountingLeftImage,
  mainTitle: <>Our Registrations & Licences services are perfect for</>,
  userTypes: [
    {
      icon: professionalsIcon,
      alt: "Startups",
      title: "🚀 Startups & New Businesses",
      description: "Helping founders set up and stay compliant from day one",
    },
    {
      icon: buissnessIcon,
      alt: "SMEs",
      title: "🏢 SMEs & Private Firms",
      description: "Tailored solutions for growing and established businesses",
    },
    {
      icon: companiesIcon,
      alt: "Traders",
      title: "🏭 Traders & Manufacturers",
      description: "Support for businesses involved in production and supply",
    },
    {
      icon: investorsIcon,
      alt: "Online Sellers",
      title: "🛒 Online Sellers & NGOs",
      description:
        "E-commerce, service providers, and non-profit organizations",
    },
  ],
};

const OfferingsData = [
  {
    image: entityRegistrationImage,
    title: "Business Entity Registration",
    subTitle:
      "We assist you in choosing and registering the right legal structure for your business",
  },
  {
    image: taxRegistrationsImage,
    title: "Essential Tax Registrations",
    subTitle: "We help you obtain mandatory tax IDs and licences quickly",
  },
  {
    image: IECImage,
    title: "IEC for Import/Export",
    subTitle:
      "Start trading globally with ease, we handle your Import/Export code application & docs",
  },
];

const smartBusinessData = [
  {
    title: "Fast process",
    subTitle: "No delays. We act quickly",
  },
  {
    title: "Expert handling",
    subTitle: "We prepare and file all required documents",
  },
  {
    title: "Wide range",
    subTitle: "One place for all types of business licences",
  },
  {
    title: "PAN India service",
    subTitle: "We serve all cities and states",
  },
];

const Registrations = () => {
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
        text="Business & Tax Registrations Made Simple "
        subText="Kickstart your business the right way. We help you register your business and take care of essential tax formalities to get you fully operational"
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
            Get the Right Registrations. Run Your Business with Confidence.
          </Typography>
          <Typography className="!text-base sm:!text-lg !text-white !text-center !mx-20 sm:!mx-24">
            Start your journey the right way. Let Tax Intelli handle the
            paperwork for you.
          </Typography>
          <RightIconCommonButton title="Talk to a Registration Expert" />
        </div>
      </ServiceBannerSection>
    </>
  );
};

export default Registrations;
