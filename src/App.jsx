import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import IncomeTax from "./pages/IncomeTax";
import GstCompliance from "./pages/GstCompliance";
import RocMca from "./pages/RocMca";
import Accounting from "./pages/Accounting";
import Registrations from "./pages/Registrations";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LayoutWrapper from "./components/Layout/LayoutWrapper";
import ScrollToTop from "./components/ScrollToTop ";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Inter, sans-serif",
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services/income-tax" element={<IncomeTax />} />
            <Route
              path="/services/gst-compliance"
              element={<GstCompliance />}
            />
            <Route path="/services/roc-mca" element={<RocMca />} />
            <Route path="/services/accounting" element={<Accounting />} />
            <Route path="/services/registrations" element={<Registrations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
