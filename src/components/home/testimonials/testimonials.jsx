import { useRef } from "react";
import LandingPageTitleSection from "../../../shared/landingPageTitleSection/landingPageTitleSection";
import { Box, Stack, Typography, Avatar, IconButton } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CEOIcon from "../../../assets/ceo.png";
import FintechIcon from "../../../assets/fintech.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const TESTIMONIALS = [
  {
    text: "Their tax advisory helped us streamline our filings during a crucial funding round. The turnaround time and clarity were exceptional. It's a good tax advisory.",
    name: "Arjun Mehta",
    title: "Founder",
    avatar: CEOIcon,
    logo: FintechIcon,
  },
  {
    text: "As a CFO, compliance accuracy is non-negotiable. This team not only meets expectations but consistently exceeds them. We’ve seen a 40% reduction in notice triggers.",
    name: "Neha Sharma",
    title: "CFO",
    avatar: CEOIcon,
    logo: FintechIcon,
  },
  {
    text: "From GST filings to bookkeeping, their end-to-end support allowed us to focus on growing our platform without worrying about backend processes.",
    name: "Rohan Kulkarni",
    title: "CEO",
    avatar: CEOIcon,
    logo: FintechIcon,
  },
];

const Testimonials = () => {
  const carouselRef = useRef(null);

  return (
    <LandingPageTitleSection
      buttonText="TESTIMONIALS"
      text="Client Stories That Matter"
      subText="Every business is unique—and so are their journeys with us. Here’s a glimpse into how we’ve made a difference."
    >
      <Box width="100%" position="relative" className="mt-8">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          arrows={false}
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          itemClass="px-2"
          keyBoardControl={true}
          draggable={true}
          pauseOnHover={false}
        >
          {TESTIMONIALS.map((item, idx) => (
            <Box key={idx} className="py-10 px-12 rounded-[20px] bg-[#F8F9FA]">
              <Box className="text-center !text-lg sm:!text-2xl sm:!leading-10 !font-semibold !text-primary !max-w-3xl !w-full !mx-auto !py-4 !mb-4 relative">
                {item.text}
                <Typography className="!leading-none absolute left-[-20px] top-[10px] text-[#0A3D2A] !text-5xl !font-bold">
                  “
                </Typography>

                <Typography className="!leading-none absolute bottom-[-22px] sm:bottom-[-13px] right-[-20px] text-[#0A3D2A] !text-5xl !font-bold">
                  ”
                </Typography>
              </Box>

              <Stack
                direction="row"
                gap={2}
                justifyContent="center"
                alignItems="center"
              >
                <Avatar
                  src={item.avatar}
                  alt={item.name}
                  className="!h-[50px] sm:!h-[60px] !w-[50px] sm:!w-[60px]"
                />
                <Box textAlign="left">
                  <Typography className="!text-base sm:!text-xl !font-semibold">
                    {item.name}
                  </Typography>
                  <Box display="flex" gap={1}>
                    <Typography className="!font-medium !text-sm">
                      {item.title}
                    </Typography>
                    <img src={item.logo} alt="logo" className="h-5" />
                  </Box>
                </Box>
              </Stack>
            </Box>
          ))}
        </Carousel>

        {/* Navigation Arrows */}
        <IconButton
          onClick={() => carouselRef.current?.previous()}
          className="!absolute top-1/2 left-[-10px] lg:left-10 transform -translate-y-1/2 bg-white shadow-md w-10 h-10"
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={() => carouselRef.current?.next()}
          className="!absolute top-1/2 right-[-10px] lg:right-10 transform -translate-y-1/2 bg-white shadow-md w-10 h-10"
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </LandingPageTitleSection>
  );
};

export default Testimonials;
