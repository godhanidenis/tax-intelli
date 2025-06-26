import React, { useState } from "react";
import LandingPageTitleSection from "../../../shared/landingPageTitleSection/landingPageTitleSection";
import { Box, Tab, Tabs } from "@mui/material";
import RightIconCommonButton from "../../../shared/CommonButton/RightIconCommonButton";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ServicesImage from "../../../assets/services.png";
import { useNavigate } from "react-router-dom";
const tabData = [
  { id: 1, label: "Income Tax Services" },
  { id: 2, label: "GST Compliance & Advisory" },
  { id: 3, label: "ROC / MCA Compliance" },
  { id: 4, label: "Accounting & Bookkeeping" },
  { id: 5, label: "Registrations & Licences" },
];

const tabContent = {
  1: {
    list: [
      "ITR Filing for individuals, businesses & NRIs",
      "Capital gains, revised & belated returns",
      "Tax planning, TDS compliance & advisory",
      "Notice responses, assessments & audits",
    ],
    stats: [
      { label: "ITRs filed annually", value: "20,000+" },
      { label: "accuracy in capital gains reporting", value: "95%+" },
      { label: "notice resolution success", value: "90%+" },
    ],
    buttonText: "Explore Tax Filing Plans",
    navigate: "/services/income-tax",
  },
  2: {
    list: [
      "GST registration & filing (monthly, quarterly, annual)",
      "Reconciliation & audit support",
      "GST advisory & litigation handling",
      "E-invoicing, input credit optimization",
    ],
    stats: [
      { label: "Monthly GST returns filed", value: "10,000+" },
      { label: "Client retention rate", value: "98%" },
      { label: "Error-free compliance rate", value: "99.5%" },
    ],
    buttonText: "Explore GST Solutions",
    navigate: "/services/gst-compliance",
  },
  3: {
    list: [
      "Annual ROC filing for companies & LLPs",
      "DIR-3 KYC, MGT-7, AOC-4 & more",
      "Company law advisory & documentation",
      "Support for notices & compliance rectifications",
    ],
    stats: [
      { label: "ROC filings annually", value: "5,000+" },
      { label: "Timely filing rate", value: "97%" },
      { label: "Client satisfaction", value: "99%" },
    ],
    buttonText: "View ROC Compliance Plans",
    navigate: "/services/roc-mca",
  },
  4: {
    list: [
      "Monthly/quarterly bookkeeping services",
      "MIS reporting & analysis",
      "Payroll management & compliance",
      "Cloud-based accounting solutions",
    ],
    stats: [
      { label: "Accounts managed monthly", value: "1,500+" },
      { label: "Accurate reporting rate", value: "99%" },
      { label: "Customer retention", value: "96%" },
    ],
    buttonText: "Discover Accounting Services",
    navigate: "/services/accounting",
  },
  5: {
    list: [
      "Company, LLP & partnership firm registration",
      "FSSAI, MSME, Import Export Code (IEC)",
      "Trademark application & renewal",
      "Shop Act, GSTIN, and more",
    ],
    stats: [
      { label: "Businesses registered", value: "8,000+" },
      { label: "License approval rate", value: "98%" },
      { label: "Turnaround time", value: "< 5 days" },
    ],
    buttonText: "Start Your Registration",
    navigate: "/services/registrations",
  },
};

const Comprehensive = () => {
  const [value, setValue] = useState(1);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currentContent = tabContent[value] || tabContent[1];

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
            <div className="flex flex-col gap-y-4 items-start lg-900:items-start mx-auto lg-900:mx-0">
              {currentContent.list.map((item, index) => (
                <div key={index} className="flex items-start gap-x-3">
                  <TaskAltIcon className="text-primary" size={20} />
                  <p className="text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Dynamic Stats Section */}
            <div className="flex flex-wrap justify-between w-full">
              {currentContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex-1 ${
                    index === 0
                      ? "border-r pr-3"
                      : index === 1
                      ? "px-3"
                      : "border-l pl-3"
                  }`}
                >
                  <p className="text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <Box className="mx-auto lg-900:mx-0">
              <RightIconCommonButton
                title={currentContent.buttonText}
                onClick={() => navigate(currentContent.navigate)}
              />
            </Box>
          </Box>

          <img
            src={ServicesImage}
            alt="Smart Tax"
            className="w-[400px] h-[100%] lg-900:h-full lg-900:w-full mx-auto lg-900:mx-0"
          />
        </Box>
      </>
    </LandingPageTitleSection>
  );
};

export default Comprehensive;
