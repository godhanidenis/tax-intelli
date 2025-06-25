import IntroSection from "../shared/ServiceSection/IntroSection";
import accountingLeftImage from "../assets/accountingPage/accountingLeftImage.png";
import accountsReceivableImage from "../assets/accountingPage/accountsReceivable.png";
import bookingImage from "../assets/accountingPage/booking.png";
import reconciliationImage from "../assets/accountingPage/reconciliation.png";
import auditImage from "../assets/accountingPage/audit.png";
import taxImage from "../assets/accountingPage/tax.png";
import inventoryImage from "../assets/accountingPage/inventory.png";
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
import ServiceBannerSection from "../shared/ServiceSection/ServiceBannerSection";
import RightIconCommonButton from "../shared/CommonButton/RightIconCommonButton";

const introDetail = {
  smallTitle: "Clear books. Better decisions. Full control",
  bigTitle: "Accounting & Bookkeeping",
  description:
    "We help you maintain clean and accurate financial records. Our accounting services are made to suit your business needs. You get full clarity and peace of mind",
};

const serviceDetail = {
  leftImage: accountingLeftImage,
  mainTitle: (
    <>
      Our Accounting <br className="hidden sm:inline" /> services are ideal for
    </>
  ),
  userTypes: [
    {
      icon: professionalsIcon,
      alt: "Small & Medium",
      title: "🏪 Small & Medium Businesses",
      description: "Retailers, service providers, and local enterprises",
    },
    {
      icon: buissnessIcon,
      alt: "Freelancers",
      title: "💼 Freelancers & Consultants",
      description:
        "Independent professionals across creative and technical fields",
    },
    {
      icon: companiesIcon,
      alt: "Startups",
      title: "🚀 Startups & New Companies",
      description: "New-age ventures and scaling businesses",
    },
    {
      icon: investorsIcon,
      alt: "NGOs",
      title: "🏥 NGOs & Service Providers",
      description:
        "Non-profits and organizations offering professional services",
    },
  ],
};

const offerCardsData = [
  {
    mainTitle: "Daily Bookkeeping",
    description:
      "We record all business transactions to keep your books clean and updated",
    list: [
      "Record daily sales and purchase invoices",
      "Track business expenses and incoming receipts",
      "Maintain organized, error-free books for smooth reviews",
    ],
    imageSrc: bookingImage,
    isLeftImage: true,
  },
  {
    mainTitle: "Bank & Cash Reconciliation",
    description:
      "We match your bank and cash records to ensure your books reflect real-time cash flow",
    list: [
      "Reconcile bank statements with your accounting records",
      "Verify and update physical cash records",
      "Identify and resolve mismatches or missing entries",
    ],
    imageSrc: reconciliationImage,
    isLeftImage: false,
  },
  {
    mainTitle: "Accounts Payable & Receivable",
    description:
      "We track your payments and collections to maintain steady cash flow",
    list: [
      "Maintain vendor bills and track payment due dates",
      "Send reminders and process timely payments",
      "Monitor outstanding invoices and client collections",
    ],
    imageSrc: accountsReceivableImage,
    isLeftImage: true,
  },
];

const OfferingsData = [
  {
    image: inventoryImage,
    title: "Inventory & Payroll Management",
    subTitle:
      "We maintain accurate stock records & handle employee salary processing with compliance",
    list: [
      "Track stock levels and avoid over/understocking",
      "Prepare monthly salary sheets",
      "Manage PF, ESI, and TDS for employees",
    ],
  },
  {
    image: taxImage,
    title: "GST, TDS & Compliance Integration",
    subTitle:
      "We sync your books with tax systems to ensure filings are smooth and mismatch-free",
    list: [
      "Link accounting with GST and TDS data",
      "Auto-track tax liabilities",
      "Ensure accurate filing without last-minute errors",
    ],
  },
  {
    image: auditImage,
    title: "Reports & Account Finalisation",
    subTitle:
      "We provide insightful reports and prepare year-end financials for audits or funding",
    list: [
      "Monthly and quarterly MIS reports",
      "Finalise trial balance, P&L, and balance sheet",
      "Stay ready for audits and financial reviews",
    ],
  },
];

const smartBusinessData = [
  {
    title: "Full accuracy",
    subTitle: "All entries checked and verified",
  },
  {
    title: "Custom support",
    subTitle: "Choose monthly, quarterly or yearly plans",
  },
  {
    title: "CA-supervised team",
    subTitle: "Work reviewed by professionals",
  },
  {
    title: "Safe record-keeping",
    subTitle: "Your data is safe and backed up",
  },
];

const Accounting = () => {
  return (
    <>
      <BackgroundImageWrapper forHeroSection={true}>
        <div className="py-12 px-4 sm:px-6 lg:px-12">
          <IntroSection {...introDetail} />
        </div>
      </BackgroundImageWrapper>

      <ServiceDetail {...serviceDetail} />

      <LandingPageTitleSection
        buttonText="OUR OFFERINGS"
        text="Day-to-Day Accounting That Keeps You in Control"
      >
        <Box className="flex items-center justify-center flex-col gap-8 mt-5">
          {offerCardsData.map((card, index) => (
            <OfferCard key={index} {...card} />
          ))}
        </Box>
      </LandingPageTitleSection>

      <LandingPageTitleSection
        buttonText="OTHER OFFERINGS"
        text="Smarter Accounting for Compliance & Decision-Making"
        subText="Beyond daily entries, we help you stay compliant, manage payroll, and access reports that guide your financial decisions."
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
            Keep Your Books Clean. Keep Your Business Strong
          </Typography>
          <Typography className="!text-base sm:!text-lg !text-white !text-center !mx-20 sm:!mx-24">
            Let our team handle your accounts while you grow your business
          </Typography>
          <RightIconCommonButton title="Request a Demo" />
        </div>
      </ServiceBannerSection>
    </>
  );
};

export default Accounting;
