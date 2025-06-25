import TaxSolutions from "../components/home/taxSolutions/taxSolutions";
import InnovativeTeams from "../components/home/innovativeTeams/InnovativeTeams";
import DiscoverSimplify from "../components/home/discoverSimplify/discoverSimplify";
import Blogs from "../components/home/blogs/blogs";
import SmartBusiness from "../components/home/smartBusiness/smartBusiness";
import Comprehensive from "../components/home/comprehensive/comprehensive";
import Testimonials from "../components/home/testimonials/testimonials";
import BackgroundImageWrapper from "../components/Layout/BackgroundImageWrapper";

const Home = () => {
  return (
    <>
      <BackgroundImageWrapper forHeroSection={true}>
        <TaxSolutions />
      </BackgroundImageWrapper>
      <InnovativeTeams />
      <DiscoverSimplify />
      <Comprehensive />
      <SmartBusiness />
      <Testimonials />
      <Blogs />
    </>
  );
};

export default Home;
