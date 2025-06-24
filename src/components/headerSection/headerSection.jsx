import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";
import { Box, Fab } from "@mui/material";
import chatBot from "../../assets/chatBot.png";

const HeaderSection = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" gap={5} position="relative">
      <Header />
      {children}
      <Footer />

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
HeaderSection.propTypes = {
  children: PropTypes.any,
};
export default HeaderSection;
