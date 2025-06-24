import React, { useState } from "react";
import LandingPageTitleSection from "../../../shared/landingPageTitleSection/landingPageTitleSection";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import TaxSolutionsImage from "../../../assets/taxSolutions.png";
import RightIconCommonButton from "../../../shared/CommonButton/RightIconCommonButton";
import { CheckCircle } from "@mui/icons-material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const tabData = [
  { id: 1, label: "Income Tax Services" },
  { id: 2, label: "GST Compliance & Advisory" },
  { id: 3, label: "ROC / MCA Compliance" },
  { id: 4, label: "Accounting & Bookkeeping" },
  { id: 5, label: "Registrations & Licences" },
];
const list = [
  "ITR Filing for individuals, businesses & NRIs",
  "Capital gains, revised & belated returns",
  "Tax planning, TDS compliance & advisory",
  "Notice responses, assessments & audits",
];
const Comprehensive = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <LandingPageTitleSection
      buttonText="OUR OFFERINGS"
      text="Comprehensive Tax & Compliance Services"
      subText="End-to-end support across tax filing, GST, ROC, accounting, and business registrations—simplified for individuals, startups, and enterprises."
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
        <Box className="grid grid-cols-1 lg-900:grid-cols-2 gap-6 py-4">
          <Box className="flex flex-col justify-center gap-6">
            {/* List Items */}
            <div className="flex flex-col gap-y-4 items-center lg-900:items-start mx-auto lg-900:mx-0">
              {list.map((item, index) => (
                <div key={index} className="flex items-start gap-x-3">
                  <TaskAltIcon className="text-primary" size={20} />
                  <p className="text-gray-800 text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-between w-full">
              <div className="flex-1 border-r pr-3">
                <p className="text-xl font-bold text-primary">20,000+</p>
                <p className="text-sm">ITRs filed annually</p>
              </div>
              <div className="flex-1 px-3">
                <p className="text-xl font-bold text-gray-900">95%+</p>
                <p className="text-sm">accuracy in capital gains reporting</p>
              </div>
              <div className="flex-1 border-l pl-3">
                <p className="text-xl font-bold text-gray-900">90%+</p>
                <p className="text-sm">notice resolution success</p>
              </div>
            </div>
            <Box className="mx-auto lg-900:mx-0">
              <RightIconCommonButton title="Explore Tax Filing Plans" />
            </Box>
          </Box>

          <img
            src={TaxSolutionsImage}
            alt="Smart Tax"
            className="w-[400px] h-[100%] lg-900:h-full lg-900:w-full mx-auto lg-900:mx-0"
          />
        </Box>
      </>
    </LandingPageTitleSection>
  );
};

export default Comprehensive;
