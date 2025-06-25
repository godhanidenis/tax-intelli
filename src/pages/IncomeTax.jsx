import IntroSection from "../shared/ServiceSection/IntroSection";
import incomeTextLeftImage from "../assets/incomeTexpage/income_text_intro.png";
import itrfilingImage from "../assets/incomeTexpage/itr_filing.png";
import investmentImage from "../assets/incomeTexpage/investment.png";
import nriImage from "../assets/incomeTexpage/nri.png";
import taxImage from "../assets/incomeTexpage/tax.png";
import tcstdsImage from "../assets/incomeTexpage/tcs_vs_tds.png";
import auditImage from "../assets/incomeTexpage/audit.png";
import professionalsIcon from "../assets/incomeTexpage/Professionals.svg";
import buissnessIcon from "../assets/incomeTexpage/buissnessIcon.svg";
import companiesIcon from "../assets/incomeTexpage/companies.svg";
import investorsIcon from "../assets/incomeTexpage/Investors.svg";
import ServiceDetail from "../shared/ServiceSection/ServiceDetail";
import BackgroundImageWrapper from "../components/Layout/BackgroundImageWrapper";
import OfferCard from "../shared/ServiceSection/OfferCard";
import LandingPageTitleSection from "../shared/landingPageTitleSection/landingPageTitleSection";
import { Box, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AIIcon from "../assets/AIIcon.png";

const introDetail = {
  smallTitle: "Accurate. On time. Hassle-free",
  bigTitle: "Income Tax Services",
  description: `We help you file your Income Tax Returns with ease. Whether you are salaried, self-employed, or running a business, we make tax filing simple and stress-free.`,
};

const serviceDetail = {
  leftImage: incomeTextLeftImage,
  mainTitle: (
    <>
      Our Income Tax <br className="hidden sm:inline" /> services are ideal for
    </>
  ),
  userTypes: [
    {
      icon: professionalsIcon,
      alt: "Salaried",
      title: "Salaried & Professionals",
      description: "Teams worldwide rely on our platform",
    },
    {
      icon: buissnessIcon,
      alt: "Business Owners",
      title: "Business Owners & Firms",
      description: "Includes proprietors, firms, and startups",
    },
    {
      icon: companiesIcon,
      alt: "HUFs",
      title: "HUFs & Companies",
      description: "Hindu Undivided Families and registered companies",
    },
    {
      icon: investorsIcon,
      alt: "NRIs",
      title: "NRIs & Investors",
      description: "Non-residents and capital market investors",
    },
  ],
};

const offerCardsData = [
  {
    mainTitle: "ITR Filing & Revisions",
    description:
      "We handle all ITR types and help you file correctly—on time, every time",
    list: [
      "ITR-1 to ITR-7 for all taxpayer categories",
      "Revised & belated return filing support",
      "Correction of defective returns (Sec 139(9))",
    ],
    imageSrc: itrfilingImage,
    isLeftImage: true,
  },
  {
    mainTitle: "Capital Gains & Investment Reporting",
    description:
      "We report gains accurately and help apply exemptions wherever possible.",
    list: [
      "Reporting gains from shares, property & mutual funds",
      "Applying capital gain exemptions correctly",
      "Handling long-term and short-term gains",
    ],
    imageSrc: investmentImage,
    isLeftImage: false,
  },
  {
    mainTitle: "NRI Taxation & Foreign Income",
    description:
      "Specialized support for NRIs to file returns and stay compliant",
    list: [
      "Filing with DTAA benefit claims",
      "Reporting foreign assets & bank accounts",
      "Guidance on global income taxability",
    ],
    imageSrc: nriImage,
    isLeftImage: true,
  },
];

const OfferingsData = [
  {
    image: taxImage,
    title: "Tax Planning & Saving Strategies",
    subTitle:
      "Hassle-free ITR filing, tax planning, and notice support—clear, quick, and expert-led",
    list: [
      "Optimize deductions & rebates under 80C",
      "Income structuring for maximum savings",
      "Advance tax and HRA planning",
    ],
  },
  {
    image: tcstdsImage,
    title: "TDS & TCS Compliance",
    subTitle:
      "From GST to bookkeeping, we manage your compliance so you can focus on growth",
    list: [
      "Filing 24Q, 26Q, 27Q forms",
      "Generating & reconciling Form 16 / 16A",
      "Quarterly compliance support",
    ],
  },
  {
    image: auditImage,
    title: "Tax Notices & Audits",
    subTitle:
      "Complete tax and ROC compliance, audits, and advisory—handled by experts, backed by tech",
    list: [
      "Responding to Sections 143(1), 142(1), 148",
      "Support for faceless assessments",
      "Tax audit filing under Section 44AB",
    ],
  },
];

const smartBusinessData = [
  {
    title: "Filing made simple",
    subTitle: "No confusion. No last-minute rush",
  },
  {
    title: "Expert guidance",
    subTitle: "CAs and tax professionals work on your case",
  },
  {
    title: "Timely reminders",
    subTitle: "We remind you before your due dates",
  },
  {
    title: "Affordable plans",
    subTitle: "Transparent fees. No hidden costs",
  },
];

const IncomeTax = () => {
  return (
    <>
      <BackgroundImageWrapper>
        <div className="py-12 px-4 sm:px-6 lg:px-12">
          <IntroSection {...introDetail} />
        </div>
      </BackgroundImageWrapper>

      <div className="py-12 px-4 sm:px-6 lg:px-12">
        <ServiceDetail {...serviceDetail} />
      </div>

      <LandingPageTitleSection
        buttonText="OUR OFFERINGS"
        text="Discover How We Simplify Your Taxes"
      />

      {offerCardsData.map((card, index) => (
        <OfferCard key={index} {...card} />
      ))}

      <LandingPageTitleSection
        buttonText="OTHER OFFERINGS"
        text="Other Offerings to Simplify Tax Matters"
        subText="Additional services designed to support every aspect of your tax journey"
      >
        <Box className="grid grid-cols-1 sm-500:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {OfferingsData.map(({ image, title, subTitle, list }, index) => (
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
              <ul className="space-y-4">
                {list.map((item, index) => (
                  <li key={index} className="flex justify-start items-center">
                    <TaskAltIcon className="text-primary" fontSize="small" />
                    <span className="ml-3 text-[#414D48]">{item}</span>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>
      </LandingPageTitleSection>

      <LandingPageTitleSection
        buttonText="OUR OFFERINGS"
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
    </>
  );
};

export default IncomeTax;
