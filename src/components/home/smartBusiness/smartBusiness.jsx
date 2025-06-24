import React from "react";
import LandingPageTitleSection from "../../../shared/landingPageTitleSection/landingPageTitleSection";
import { Typography } from "@mui/material";
import AIIcon from "../../../assets/AIIcon.png";

const smartBusinessData = [
  {
    title: "Transparent pricing, always",
    subTitle: "No hidden fees. Know exactly what you pay for.",
  },
  {
    title: "Expert support, personalized to you",
    subTitle: "Work with dedicated professionals who understand your business",
  },
  {
    title: "Smart, tech-powered platform",
    subTitle:
      "Stay ahead with real-time updates and automated compliance tools",
  },
  {
    title: "Trusted across India",
    subTitle: "Chosen by startups, SMEs, and professionals nationwide",
  },
];

const SmartBusiness = () => {
  return (
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
  );
};

export default SmartBusiness;
