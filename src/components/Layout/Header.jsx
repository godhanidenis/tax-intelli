import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import TaxIntelliLogo from "../../assets/TaxIntelliLogo.png";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayIconCommonButton from "../../shared/CommonButton/PlayIconCommonButton";
import playIcon from "../../assets/playIconWhite.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const servicesOpen = Boolean(servicesAnchorEl);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileServicesOpen(false);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  const mainMenuItems = ["Home", "Services", "Blogs"];
  const servicesSubMenu = [
    "Income Tax Services",
    "GST Compliance & Advisory",
    "ROC / MCA Compliance",
    "Accounting & Bookkeeping",
    "Registrations & Licences",
  ];

  const menuRoutes = {
    Home: "/",
    Services: "/services",
    Blogs: "/blogs",
    "Income Tax Services": "/services/income-tax",
    "GST Compliance & Advisory": "/services/gst-compliance",
    "ROC / MCA Compliance": "/services/roc-mca",
    "Accounting & Bookkeeping": "/services/accounting",
    "Registrations & Licences": "/services/registrations",
  };

  const handleNavigate = (label) => {
    const path = menuRoutes[label];
    if (path) navigate(path);
  };

  const isActive = (label) => {
    const path = menuRoutes[label];
    return location.pathname === path;
  };

  const isSubMenuActive = servicesSubMenu.some((label) => isActive(label));

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "transparent",
        backdropFilter: "blur(100px)",
      }}
    >
      <div className="flex lg:justify-between items-center lg:gap-6 sm:gap-4 gap-2 custom-container p-4">
        <img
          src={TaxIntelliLogo}
          className="h-[37px] w-[145px]"
          draggable="false"
          alt="logo picture"
          onClick={() => handleNavigate("Home")}
          style={{ cursor: "pointer" }}
        />

        {/* Desktop Menu */}
        <Stack
          direction="row"
          alignItems="center"
          gap={6}
          className="rounded-lg py-[18px] px-8 lg:!flex !hidden"
        >
          {mainMenuItems.map((item, index) => {
            if (item === "Services") {
              return (
                <Typography
                  key={index}
                  onClick={handleServicesClick}
                  aria-controls={servicesOpen ? "services-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen ? "true" : undefined}
                  variant="body1"
                  component="span"
                  className={`cursor-pointer duration-300 !text-base !leading-5 select-none ${
                    isSubMenuActive || isActive(item)
                      ? "!font-bold text-primary"
                      : "text-secondary hover:!text-primary"
                  }`}
                >
                  {item}
                  <KeyboardArrowDownIcon
                    sx={{
                      transform: servicesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Typography>
              );
            }

            return (
              <Typography
                key={index}
                onClick={() => handleNavigate(item)}
                variant="body1"
                component="span"
                className={`cursor-pointer duration-300 !text-base !leading-5 select-none ${
                  isActive(item)
                    ? "!font-bold text-primary"
                    : "text-secondary hover:!text-primary"
                }`}
              >
                {item}
              </Typography>
            );
          })}
        </Stack>

        {/* Services Dropdown */}
        <Menu
          id="services-menu"
          anchorEl={servicesAnchorEl}
          open={servicesOpen}
          onClose={handleServicesClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                borderRadius: "12px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 16px rgba(0,0,0,0.25)",
              },
            },
          }}
        >
          {servicesSubMenu.map((subItem, i) => (
            <MenuItem
              key={i}
              onClick={() => {
                handleServicesClose();
                handleNavigate(subItem);
              }}
              className={`duration-300 ${
                isActive(subItem)
                  ? "!font-bold !text-primary"
                  : "!text-secondary hover:!text-primary"
              }`}
            >
              {subItem}
            </MenuItem>
          ))}
        </Menu>

        {/* CTA - Desktop */}
        <Box className="lg:ms-0 ms-auto hidden sm-500:flex">
          <PlayIconCommonButton
            title="Talk to an Expert"
            icon={playIcon}
            className="text-white !bg-primary hover:!bg-secondary duration-300 !py-2 lg:!py-2.5 !px-4 !rounded-full"
          />
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          sx={{
            backgroundColor: "#18181B80",
            color: "white",
            borderRadius: "8px",
            px: "24px",
            [theme.breakpoints.down(500)]: {
              px: "8px",
            },
            "&:hover": {
              backgroundColor: "#3A3A3A",
              color: "#FFD700",
            },
          }}
          className="!ms-auto sm-500:!ms-0 lg:!hidden"
          onClick={handleMenuClick}
        >
          <ReorderIcon sx={{ color: "white" }} />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          slotProps={{
            paper: {
              sx: {
                borderRadius: "8px",
                width: "250px",
              },
            },
          }}
        >
          {mainMenuItems.map((item, index) => {
            if (item === "Services") {
              return (
                <div key={index}>
                  <MenuItem
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`flex justify-between items-center duration-300 ${
                      isSubMenuActive || isActive(item)
                        ? "!font-bold !text-primary"
                        : "!text-secondary hover:!text-primary"
                    }`}
                  >
                    {item}
                    <KeyboardArrowDownIcon
                      sx={{
                        transform: mobileServicesOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </MenuItem>
                  {mobileServicesOpen &&
                    servicesSubMenu.map((subItem, subIndex) => (
                      <MenuItem
                        key={`sub-${subIndex}`}
                        onClick={() => {
                          handleMenuClose();
                          handleNavigate(subItem);
                        }}
                        className={`!ps-6 text-sm duration-300 ${
                          isActive(subItem)
                            ? "!font-bold !text-primary"
                            : "!text-secondary hover:!text-primary"
                        }`}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                </div>
              );
            }

            return (
              <MenuItem
                key={index}
                onClick={() => {
                  handleMenuClose();
                  handleNavigate(item);
                }}
                className={`duration-300 ${
                  isActive(item)
                    ? "!font-bold !text-primary"
                    : "!text-secondary hover:!text-primary"
                }`}
              >
                {item}
              </MenuItem>
            );
          })}

          <Divider className="!m-0 sm-500:hidden" />

          {/* Mobile CTA Button */}
          <Box className="px-4 pt-2 pb-1 sm-500:hidden">
            <PlayIconCommonButton
              title="Talk to an Expert"
              icon={playIcon}
              className="text-white !bg-primary hover:!bg-secondary duration-300 !py-2 !px-4 !rounded-full w-full"
              onClick={() => {
                handleMenuClose();
              }}
            />
          </Box>
        </Menu>
      </div>
    </Box>
  );
};

export default Header;
