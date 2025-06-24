import HeaderSection from "../components/headerSection/headerSection";
import IntroSection from "../shared/ServiceSection/IntroSection";
import incomeTextLeftImage from "../assets/incomeTexpage/income_text_intro.png";
import ServiceDetail from "../shared/ServiceSection/ServiceDetail";

const introDetail = {
  smallTitle: "Accurate. On time. Hassle-free",
  bigTitle: "Income Tax Services",
  description: `We help you file your Income Tax Returns with ease. Whether you are salaried, self-employed, or running a business, we make tax filing simple and stress-free.`,
};

const serviceDetail = {
  leftImage: incomeTextLeftImage,
  mainTitle: (
    <>
      Our Income Tax <br className="hidden sm:inline" /> services are ideal for
    </>
  ),
  userTypes: [
    {
      icon: "https://img.icons8.com/emoji/48/briefcase-emoji.png",
      alt: "Salaried",
      title: "Salaried & Professionals",
      description: "Teams worldwide rely on our platform",
    },
    {
      icon: "https://img.icons8.com/color/48/shop.png",
      alt: "Business Owners",
      title: "Business Owners & Firms",
      description: "Includes proprietors, firms, and startups",
    },
    {
      icon: "https://img.icons8.com/color/48/family.png",
      alt: "HUFs",
      title: "HUFs & Companies",
      description: "Hindu Undivided Families and registered companies",
    },
    {
      icon: "https://img.icons8.com/emoji/48/globe-showing-americas-emoji.png",
      alt: "NRIs",
      title: "NRIs & Investors",
      description: "Non-residents and capital market investors",
    },
  ],
};

const IncomeTax = () => {
  return (
    <HeaderSection>
      <div className="py-12 px-4 sm:px-6 lg:px-12">
        <IntroSection {...introDetail} />
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-12">
        <ServiceDetail {...serviceDetail} />
      </div>
    </HeaderSection>
  );
};

export default IncomeTax;
