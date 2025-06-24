import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import PropTypes from "prop-types";
import { Box, Fab } from "@mui/material";
import chatBot from "../../assets/chatBot.png";
import backgroundImage from "../../assets/HeaderBg.png";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => {
  return (
    <Box display="flex" flexDirection="column" position="relative">
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(6px)",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Header />
      </Box>
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
