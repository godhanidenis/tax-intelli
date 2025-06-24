import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import IncomeTax from "./pages/IncomeTax";
import GstCompliance from "./pages/GstCompliance";
import RocMca from "./pages/RocMca";
import Accounting from "./pages/Accounting";
import Registrations from "./pages/Registrations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services/income-tax" element={<IncomeTax />} />
        <Route path="/services/gst-compliance" element={<GstCompliance />} />
        <Route path="/services/roc-mca" element={<RocMca />} />
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/registrations" element={<Registrations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
