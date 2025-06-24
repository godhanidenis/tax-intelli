import React from "react";
import LandingPageTitleSection from "../../../shared/landingPageTitleSection/landingPageTitleSection";
import StartupsImage from "../../../assets/blogs/Startups.png";
import SMEsImage from "../../../assets/blogs/SMEs.png";
import { Box, Button, Typography } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RightIconCommonButton from "../../../shared/CommonButton/RightIconCommonButton";
import { useNavigate } from "react-router-dom";

const BlogsData = [
  {
    image: StartupsImage,
    title: "The Ultimate Guide to Filing Taxes for Indian Startups",
    subTitle:
      "What every founder needs to know before the financial year ends.",
    category: "Tax Filing",
    date: "19 Jan 2025",
    categoryColor: "bg-[#F65D36]",
  },
  {
    image: SMEsImage,
    title: "Compliance Checklist for SMEs in 2025",
    subTitle: "A step-by-step guide to stay audit-ready and avoid penalties.",
    category: "Compliance",
    date: "19 Jan 2025",
    categoryColor: "bg-[#3683F6]",
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <LandingPageTitleSection
      buttonText="BLOGS"
      text="Guides, Tips & Resources"
      subText="Practical insights and expert advice to help you make smarter business decisions"
    >
      <>
        <Box className="grid grid-cols-1 sm-500:grid-cols-2 gap-4 md:gap-6 mt-8">
          {BlogsData.map(
            (
              { image, title, subTitle, category, date, categoryColor },
              index
            ) => (
              <Box
                key={index}
                className="rounded-[20px] bg-white p-4 md:p-6 flex flex-col gap-3 md:gap-4 shadow-[0px_8px_48px_0px_#0A3D2A14] h-full"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover rounded-xl"
                />

                {/* Category + Date */}
                <Box className="flex items-center justify-start gap-2 sm:gap-6 flex-wrap">
                  <Box
                    className={`text-white px-3 py-1 rounded-full ${categoryColor}`}
                  >
                    {category}
                  </Box>
                  <Box className="flex items-center gap-1 text-base">
                    <DateRangeIcon />
                    {date}
                  </Box>
                </Box>

                {/* Title */}
                <Typography className="!text-[22px] !leading-[32px] !font-bold !text-primary">
                  {title}
                </Typography>

                {/* SubTitle */}
                <Typography className="!text-base">{subTitle}</Typography>

                {/* Read Blog Button */}
                <Button
                  variant="outlined"
                  sx={{ textTransform: "none" }}
                  className="!border-primary !rounded-full w-fit sm:!px-4 sm:!py-2 !text-primary"
                >
                  <span className="flex justify-center items-center gap-1 font-medium text-sm sm:text-base">
                    Read Blog
                    <KeyboardArrowRightIcon className="text-sm sm:text-base" />
                  </span>
                </Button>
              </Box>
            )
          )}
        </Box>
        <Box display="flex" justifyContent="center" className="!mt-8">
          <RightIconCommonButton
            title="See all Blogs"
            onClick={() => navigate("/blogs")}
          />
        </Box>
      </>
    </LandingPageTitleSection>
  );
};

export default Blogs;
