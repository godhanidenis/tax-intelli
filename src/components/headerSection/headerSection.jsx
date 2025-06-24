import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const HeaderSection = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
HeaderSection.propTypes = {
  children: PropTypes.any,
};
export default HeaderSection;
