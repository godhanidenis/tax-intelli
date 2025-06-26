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
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import GSTReturn from "../assets/gstCompliancePage/GSTReturn.png";
import reconciliationImage from "../assets/gstCompliancePage/reconciliation.png";
import GSTAdvisoryImage from "../assets/gstCompliancePage/GSTAdvisory.png";
import industrySupportImage from "../assets/gstCompliancePage/industrySupport.png";
import noticesImage from "../assets/gstCompliancePage/notices.png";

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

const GstDetail = {
  btnText: "Accurate. On Time. Every Time",
  title: "GST Return Filing",
  subTitle: `Timely return filing is crucial to avoid penalties and ensure smooth input tax credit claims. We take care of the entire process—monthly, quarterly, and annually—so you never miss a deadline.`,
  gstTypes: [
    {
      title: "GSTR-1",
      description: "Outward supplies (sales) – filed monthly/quarterly",
    },
    {
      title: "GSTR-3B",
      description: "Summary return of outward and inward supplies",
    },
    {
      title: "GSTR-4",
      description: "For composition scheme taxpayers",
    },
    {
      title: "GSTR-9/9C",
      description: "Annual return & audit certification",
    },
  ],
};

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
              {GstDetail.btnText}
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
                {GstDetail.title}
              </Typography>
              <Typography className="!text-lg lg:text-start">
                {GstDetail.subTitle}
              </Typography>
            </Box>
          </Box>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {GstDetail.gstTypes.map((item, index) => (
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
            src={GSTReturn}
            alt="Professional"
            className="rounded-lg w-[400px] lg:w-full md:w-94 h-auto mx-auto lg:mx-0 mix-blend-multiply"
          />
        </div>
      </div>

      <LandingPageTitleSection
        buttonText="GST GUIDANCE"
        text="Comprehensive GST Support Beyond Filing"
        subText="From input credit to audits and sector-specific advice—we cover everything you need to stay compliant and worry-free."
      >
        <Box className="flex gap-4 sm:gap-8 flex-col mt-8">
          <Box className="grid grid-cols-12 gap-4 sm:gap-8">
            <Box className="col-span-12 lg-900:col-span-7 bg-[#F8F9FA] rounded-[30px] px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 flex flex-col gap-3">
              <Typography className="!font-bold !text-xl lg-900:!text-[28px] !text-primary !mb-1">
                Reconciliation & Input Tax Credit
              </Typography>
              <Typography className="text-sm sm:text-base !font-medium !mb-2">
                We match GSTR-2B with purchases to maximize input credit and
                prevent mismatches
              </Typography>
              <Box className="w-full h-full sm:px-10 lg:px-20">
                <img src={reconciliationImage} alt="reconciliationImage" />
              </Box>
            </Box>

            <Box className="col-span-12 lg-900:col-span-5 bg-[#F8F9FA] rounded-[30px] px-6 sm:px-8 md:px-10 pt-6 pb-4 sm:pt-8 md:pt-10 flex flex-col gap-3">
              <Typography className="!font-bold !text-xl lg-900:!text-[28px] !text-primary !mb-1">
                GST Advisory
              </Typography>
              <Typography className="text-sm sm:text-base !font-medium !mb-2">
                Get clear advice on invoices, HSN codes, tax rates, and credit
                rules
              </Typography>
              <Box className="w-full h-full flex items-center">
                <img src={GSTAdvisoryImage} alt="GSTAdvisoryImage" />
              </Box>
            </Box>
          </Box>

          <Box className="grid grid-cols-12 gap-4 sm:gap-8">
            <Box className="col-span-12 lg-900:col-span-5 bg-[#F8F9FA] rounded-[30px] px-6 sm:px-8 md:px-10 pt-6 pb-4 sm:pt-8 md:pt-10 flex flex-col gap-3">
              <Typography className="!font-bold !text-xl lg-900:!text-[28px] !text-primary !mb-1">
                Industry-Specific Support
              </Typography>
              <Typography className="text-sm sm:text-base !font-medium !mb-2">
                Tailored GST guidance for sectors like e-commerce, real estate,
                and healthcare
              </Typography>
              <Box className="w-full h-full flex items-center">
                <img
                  src={industrySupportImage}
                  alt="industrySupportImage"
                  className="rounded-3xl"
                />
              </Box>
            </Box>

            <Box className="col-span-12 lg-900:col-span-7 bg-[#F8F9FA] rounded-[30px] px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 relative flex flex-col gap-3">
              <Box className="sm:absolute flex flex-col gap-3 z-50">
                <Typography className="!font-bold !text-xl lg-900:!text-[28px] !text-primary !mb-1 !w-1/2">
                  Notices & Representation
                </Typography>
                <Typography className="text-sm sm:text-base !font-medium !mb-2 sm:!w-1/2">
                  We handle GST notices, audits, and represent you in appeals
                  and assessments
                </Typography>
              </Box>
              <Box className="w-full h-full flex items-center">
                <img src={noticesImage} alt="noticesImage" />
              </Box>
            </Box>
          </Box>
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
