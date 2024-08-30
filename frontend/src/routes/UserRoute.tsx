import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/user_pages/Home";
import Services from "../pages/user_pages/Services";
import Project from "../pages/user_pages/project";
import Contact from "../pages/user_pages/Contact";
import About from "../pages/user_pages/About";
import ServiceDetails from "../pages/user_pages/ServiceDetails";

const UserRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default UserRoute;
