import IntroSection from "../shared/ServiceSection/IntroSection";
import accountingLeftImage from "../assets/rocMcaPage/accountingLeftImage.png";
import bookingImage from "../assets/accountingPage/booking.png";
import reconciliationImage from "../assets/accountingPage/reconciliation.png";
import approvalImage from "../assets/rocMcaPage/approval.png";
import filingImage from "../assets/rocMcaPage/filing.png";
import moaImage from "../assets/rocMcaPage/moa.png";
import professionalsIcon from "../assets/incomeTexpage/Professionals.svg";
import buissnessIcon from "../assets/incomeTexpage/buissnessIcon.svg";
import companiesIcon from "../assets/incomeTexpage/companies.svg";
import investorsIcon from "../assets/incomeTexpage/Investors.svg";
import ServiceDetail from "../shared/ServiceSection/ServiceDetail";
import BackgroundImageWrapper from "../components/Layout/BackgroundImageWrapper";
import OfferCard from "../shared/ServiceSection/OfferCard";
import LandingPageTitleSection from "../shared/landingPageTitleSection/landingPageTitleSection";
import { Box, Typography } from "@mui/material";
import AIIcon from "../assets/AIIcon.png";
import ServiceBannerSection from "../shared/ServiceSection/ServiceBannerSection";
import RightIconCommonButton from "../shared/CommonButton/RightIconCommonButton";

const introDetail = {
  smallTitle: "Stay updated. Stay legal. Stay stress-free",
  bigTitle: "ROC / MCA Compliance",
  description: `We help you manage all ROC and MCA filings with ease. From company incorporation to annual returns, we ensure full legal compliance under the Companies Act`,
};

const serviceDetail = {
  leftImage: accountingLeftImage,
  mainTitle: (
    <>
      Our ROC services are <br className="hidden sm:inline" /> best suited for
    </>
  ),
  userTypes: [
    {
      icon: professionalsIcon,
      alt: "One Person",
      title: "One Person Companies",
      description: "Single-promoter firms needing streamlined compliance",
    },
    {
      icon: buissnessIcon,
      alt: "LLPs & Section",
      title: "LLPs & Section 8 Companies",
      description: "Limited liability partnerships and not-for-profit entities",
    },
    {
      icon: companiesIcon,
      alt: "Startups & NGOs",
      title: "Startups & NGOs",
      description: "Early-stage ventures and charitable organizations",
    },
    {
      icon: investorsIcon,
      alt: "Directors & Partners",
      title: "Directors & Partners",
      description: "Individuals responsible for legal and statutory filings",
    },
  ],
};

const offerCardsData = [
  {
    mainTitle: "Ongoing Compliance & Filings",
    description:
      "We manage your company’s regular and event-based compliance, ensuring you meet all MCA requirements without missing a deadline.",
    list: [
      "Annual Filings – MGT-7, AOC-4, DIR-3 KYC, etc",
      "Event-Based – Share transfers, director or address changes",
      "LLP Filings – Forms 11, 8, and partner updates",
    ],
    imageSrc: bookingImage,
    isLeftImage: true,
  },
  {
    mainTitle: "Governance, Conversion & Closure",
    description:
      "Support for internal records, transitions, and business closures",
    list: [
      "Post-Incorporation – PAN, TAN, bank account, auditor",
      "Board Support – Resolutions, minutes, registers",
      "Conversion/Closure – Firm to company or strike-off",
    ],
    imageSrc: reconciliationImage,
    isLeftImage: false,
  },
];

const OfferingsData = [
  {
    image: approvalImage,
    title: "Name Approval & Reservation",
    subTitle:
      "We help you choose a valid business name and get it approved through the RUN or SPICe+ system",
  },
  {
    image: moaImage,
    title: "Drafting MOA & AOA",
    subTitle:
      "We prepare your Memorandum and Articles of Association tailored to your business structure and goals",
  },
  {
    image: filingImage,
    title: "Filing SPICe+ & Linked Forms",
    subTitle:
      "We file all incorporation forms (SPICe+, AGILE-PRO, eMOA, eAOA) and track approvals until you receive your incorporation certificate",
  },
];

const smartBusinessData = [
  {
    title: "End-to-end service",
    subTitle: "From formation to filing",
  },
  {
    title: "Accurate drafting",
    subTitle: "All forms and documents done properly",
  },
  {
    title: "On-time filings",
    subTitle: "No delays. No penalties",
  },
  {
    title: "Expert guidance",
    subTitle: "Legal and compliance support you can trust",
  },
];

const RocMca = () => {
  return (
    <>
      <BackgroundImageWrapper forHeroSection={true}>
        <div className="py-12 px-4 sm:px-6 lg:px-12">
          <IntroSection {...introDetail} />
        </div>
      </BackgroundImageWrapper>

      <ServiceDetail {...serviceDetail} />

      <LandingPageTitleSection
        buttonText="Simple, Structured & Seamless"
        text="Company & LLP Incorporation"
        subText="We guide you through every step of business setup, ensuring smooth registration with the Ministry of Corporate Affairs (MCA)"
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
        buttonText="OUR OFFERINGS"
        text="End-to-End ROC & MCA Compliance"
      >
        <Box className="flex items-center justify-center flex-col gap-8 mt-5">
          {offerCardsData.map((card, index) => (
            <OfferCard key={index} {...card} />
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
            Don’t Miss Your ROC Deadlines
          </Typography>
          <Typography className="!text-base sm:!text-lg !text-white !text-center !mx-20 sm:!mx-24">
            Let us handle your MCA filings so you can focus on your business
          </Typography>
          <RightIconCommonButton title="Start Your Filing" />
        </div>
      </ServiceBannerSection>
    </>
  );
};

export default RocMca;
