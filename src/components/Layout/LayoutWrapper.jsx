import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { Box, Fab } from "@mui/material";
import chatBot from "../../assets/chatBot.png";
import { Outlet } from "react-router-dom";
import BackgroundImageWrapper from "./BackgroundImageWrapper";

const LayoutWrapper = () => {
  return (
    <Box display="flex" flexDirection="column" position="relative">
      <BackgroundImageWrapper forHeader={true}>
        <Header />
      </BackgroundImageWrapper>
      <Box display="flex" flexDirection="column" gap={5}>
        <Outlet />
        <Footer />
      </Box>

      <Fab
        className="!bg-primary !p-2"
        aria-label="chatbot"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
          height: 72,
          width: 72,
        }}
      >
        <img src={chatBot} alt="chatBot" className="h-10 w-10" />
      </Fab>
    </Box>
  );
};

export default LayoutWrapper;
