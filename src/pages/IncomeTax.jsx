import { Box, Button, Typography } from "@mui/material";
import HeaderSection from "../components/headerSection/headerSection";
import PlayIconCommonButton from "../shared/CommonButton/PlayIconCommonButton";
import playIcon from "../assets/playIconGreen.svg";

const IncomeTax = () => {
  return (
    <HeaderSection>
      <Box mb={7} className="custom-container px-4">
        <Box
          className="flex flex-col gap-6 items-center justify-center"
          mb={10}
        >
          <Typography className="!font-bold !text-[22px] !text-primary text-center">
            Accurate. On time. Hassle-free
          </Typography>

          <Typography className="!font-bold !text-5xl lg:!text-6xl xl:!text-7xl xl:!leading-[82px] !text-primary text-center">
            Income Tax Services
          </Typography>

          <Typography className="!text-lg !leading-8 max-w-[1080px] w-full text-center">
            We help you file your Income Tax Returns with ease. Whether you are
            salaried, self-employed, or running a business, we make tax filing
            simple and stress-free.
          </Typography>

          <div className="flex gap-4 sm:gap-12 flex-col sm:flex-row">
            <PlayIconCommonButton
              title="Talk to an Expert"
              icon={playIcon}
              buttonVariant="outlined"
              textClass="text-primary text-base lg:text-lg font-medium"
              className="bg-white !text-primary !px-3 lg:!px-4 xl:!px-5 !py-2 lg:!py-3 xl:!py-4 !rounded-full !border-primary"
            />

            <PlayIconCommonButton
              title="Explore Our Services"
              textClass="text-primary text-base lg:text-lg font-medium text-white"
              className="!bg-primary hover:!bg-secondary duration-300 !py-2 lg:!py-2.5 !px-4 !rounded-full text-lg"
            />
          </div>
        </Box>
      </Box>
    </HeaderSection>
  );
};

export default IncomeTax;
