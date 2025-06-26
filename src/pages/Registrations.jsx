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
import { Box, Tab, Tabs, Typography } from "@mui/material";
import AIIcon from "../assets/AIIcon.png";
import ServiceBannerSection from "../shared/ServiceSection/ServiceBannerSection";
import RightIconCommonButton from "../shared/CommonButton/RightIconCommonButton";
import governmentReturnImage from "../assets/registrationsPage/governmentReturn.png";
import certificationsImage from "../assets/registrationsPage/certifications.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useState } from "react";

const tabData = [
  { id: 1, label: "GeM Portal Onboarding" },
  { id: 2, label: "Pollution & ISO Certifications" },
  { id: 3, label: "Intellectual Property Services" },
  { id: 4, label: "Property Mutation Assistance" },
];

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

const GovernmentDetail = {
  btnText: "Accurate. On Time. Every Time",
  title: "Government & Startup Schemes",
  subTitle: `We help you tap into government support and licensing benefits with simplified onboarding and registration processes`,
  gstTypes: [
    {
      title: "FSSAI Registration",
      description:
        "For food businesses across Basic, State, and Central levels",
    },
    {
      title: "MSME Registration",
      description: "For benefits in loans, subsidies, and government tenders",
    },
    {
      title: "Startup India Registration",
      description: "DPIIT recognition to access tax and funding benefits",
    },
    {
      title: "Labour & Employment Licences",
      description: "Includes Shops & Establishment, PF, ESI",
    },
  ],
};

const tabContent = {
  1: {
    list: [
      "ITR Filing for individuals, businesses & NRIs",
      "Capital gains, revised & belated returns",
      "Tax planning, TDS compliance & advisory",
    ],
    text: "We help you get listed on the Government e-Marketplace (GeM), enabling you to sell products and services directly to government departments.",
  },
  2: {
    list: [
      "ITR Filing for individuals, businesses & NRIs",
      "Capital gains, revised & belated returns",
      "Tax planning, TDS compliance & advisory",
    ],
    text: "We help you get listed on the Government e-Marketplace (GeM), enabling you to sell products and services directly to government departments.",
  },
  3: {
    list: [
      "ITR Filing for individuals, businesses & NRIs",
      "Capital gains, revised & belated returns",
      "Tax planning, TDS compliance & advisory",
    ],
    text: "We help you get listed on the Government e-Marketplace (GeM), enabling you to sell products and services directly to government departments.",
  },

  4: {
    text: "We help you get listed on the Government e-Marketplace (GeM), enabling you to sell products and services directly to government departments.",
    list: [
      "ITR Filing for individuals, businesses & NRIs",
      "Capital gains, revised & belated returns",
      "Tax planning, TDS compliance & advisory",
    ],
  },
};

const Registrations = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currentContent = tabContent[value] || tabContent[1];
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

      <div className="custom-container px-4 !mb-14 grid grid-cols-12 sm:gap-10">
        {/* Left Text Content  */}
        <div className="space-y-6 col-span-12 lg:col-span-6 xl:col-span-8">
          <Box
            display="flex"
            flexDirection="column"
            className="!lg:items-start"
            gap={2}
          >
            <Box className="font-semibold text-sm leading-6 bg-tertiary text-primary px-4 py-2 rounded-full select-none w-fit mx-auto lg:mx-0">
              {GovernmentDetail.btnText}
            </Box>

            <Box
              maxWidth={696}
              display="flex"
              flexDirection="column"
              className="!mx-auto lg:!mx-0"
              gap={3}
              textAlign="center"
            >
              <Typography className="!text-primary !font-bold !text-4xl sm-500:!text-5xl lg:text-start">
                {GovernmentDetail.title}
              </Typography>
              <Typography className="!text-lg lg:text-start">
                {GovernmentDetail.subTitle}
              </Typography>
            </Box>
          </Box>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {GovernmentDetail.gstTypes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <TaskAltIcon className="text-primary" size={20} />
                <div>
                  <h3 className="font-semibold text-black ">{item.title}</h3>
                  <p className="text-[#414D48] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image and Tag  */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left col-span-12 lg:col-span-6 xl:col-span-4 mt-10 sm:mt-0">
          <img
            src={governmentReturnImage}
            alt="Professional"
            className="rounded-lg w-[400px] lg:w-full md:w-94 h-auto mx-auto lg:mx-0 mix-blend-multiply"
          />
        </div>
      </div>

      <LandingPageTitleSection
        buttonText="OUR OFFERINGS"
        text="Certifications, Portals & IP Services"
        subText="Build trust, protect your brand, and access new business opportunities with essential registrations and certifications"
      >
        <>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} mt={7}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="compliance tabs"
              slotProps={{
                indicator: {
                  className: "!bg-primary",
                },
              }}
            >
              {tabData.map((tab) => (
                <Tab
                  key={tab.id}
                  value={tab.id}
                  label={tab.label}
                  className={`!text-primary ${
                    value === tab.id ? "!font-semibold" : "!font-medium "
                  }`}
                />
              ))}
            </Tabs>
          </Box>
          <Box className="grid grid-cols-12 gap-6 pt-4 sm:pt-8">
            <Box className="col-span-12 lg-900:col-span-7 flex flex-col lg-900:pt-4 gap-8">
              <Typography className="!text-lg !font-medium text-center lg-900:text-start">
                {currentContent.text}
              </Typography>
              {/* List Items */}
              <div className="flex flex-col gap-y-4 items-start lg-900:items-start mx-auto lg-900:mx-0">
                {currentContent.list.map((item, index) => (
                  <div key={index} className="flex items-start gap-x-3">
                    <TaskAltIcon className="text-primary" size={20} />
                    <p className="text-base">{item}</p>
                  </div>
                ))}
              </div>
            </Box>

            <img
              src={certificationsImage}
              alt="Smart Tax"
              className="col-span-12 lg-900:col-span-5 w-[400px] h-[100%] lg-900:h-full lg-900:w-full mx-auto lg-900:mx-0"
            />
          </Box>
        </>
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
