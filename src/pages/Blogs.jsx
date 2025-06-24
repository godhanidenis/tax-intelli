import { useState } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import StartupsImage from "../assets/blogs/Startups.png";
import SMEsImage from "../assets/blogs/SMEs.png";
import DateRangeIcon from "@mui/icons-material/DateRange";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BackgroundImageWrapper from "../components/Layout/BackgroundImageWrapper";

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
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <BackgroundImageWrapper>
        <Box className="flex flex-col gap-3 items-center justify-center mb-10 sm:mb-20">
          <Typography className="!font-bold !text-5xl lg:!text-6xl xl:!text-7xl xl:!leading-[82px] !text-primary">
            News & Media
          </Typography>

          <Typography className="!text-lg !leading-8 max-w-[1080px] w-full text-center">
            Check out some of our latest news, press releases and updates
          </Typography>
        </Box>
      </BackgroundImageWrapper>
      <Box className="custom-container px-4">
        <Box className="flex flex-wrap gap-6 items-center justify-between">
          <Box className="flex gap-4 items-center">
            <Typography className="text-[#081617] !font-bold !text-4xl">
              All Blogs
            </Typography>
            <Box className="bg-tertiary h-11 w-11 rounded-full flex justify-center items-center">
              06
            </Box>
          </Box>
          <Box className="flex gap-4 items-center">
            <Typography className="text-primary !font-bold !text-lg">
              Blog Category :
            </Typography>
            <FormControl sx={{ minWidth: 150 }}>
              <Select
                labelId="category-label"
                id="demo-simple-select"
                value={category}
                onChange={handleChange}
                displayEmpty
                className="!text-primary"
                sx={{
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0A3D2A",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#0A3D2A",
                    },
                  "& .MuiSelect-select": {
                    padding: "10px 14px",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    className: "!text-primary",
                    sx: {
                      "& .Mui-selected": {
                        backgroundColor: "#0a3d2a14 !important",
                      },
                    },
                  },
                }}
              >
                <MenuItem value="" className="">
                  All Categories
                </MenuItem>
                <MenuItem value={10} className="">
                  Ten
                </MenuItem>
                <MenuItem value={20} className="">
                  Twenty
                </MenuItem>
                <MenuItem value={30} className="">
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
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
      </Box>
    </>
  );
};

export default Blogs;
