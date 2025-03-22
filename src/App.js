import "./App.css";
import "./global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import "font-awesome/css/font-awesome.min.css";
import ServiceSection from "./pages/services";
import BlogsSection from "./pages/blogs";
import PartnerWithUsSection from "./pages/partners";
import PrivacyPolicy from "./pages/socialPages/privacyPolicy";
import TermAndCondition from "./pages/socialPages/termAndCondition";
import BlogDetails from "./pages/blogs/blogDetails";
import PropertiesList from "./pages/property";
import PropertiesDetails from "./pages/property/propertyDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/blogs" element={<BlogsSection />} />
          <Route path="/partner-with-us" element={<PartnerWithUsSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-and-service" element={<TermAndCondition />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/properties" element={<PropertiesList />} />
          <Route
            path="/properties/:id/:property_id"
            element={<PropertiesDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
