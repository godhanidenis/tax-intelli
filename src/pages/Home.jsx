import React from "react";
import HeaderSection from "../components/headerSection/headerSection";
import TaxSolutions from "../components/home/taxSolutions/taxSolutions";
import InnovativeTeams from "../components/home/innovativeTeams/InnovativeTeams";
import DiscoverSimplify from "../components/home/discoverSimplify/discoverSimplify";
import Blogs from "../components/home/blogs/blogs";
import SmartBusiness from "../components/home/smartBusiness/smartBusiness";
import Comprehensive from "../components/home/comprehensive/comprehensive";
import Testimonials from "../components/home/testimonials/testimonials";

const Home = () => {
  return (
    <HeaderSection>
      <TaxSolutions />
      <InnovativeTeams />
      <DiscoverSimplify />
      <Comprehensive />
      <SmartBusiness />
      <Testimonials />
      <Blogs />
    </HeaderSection>
  );
};

export default Home;
