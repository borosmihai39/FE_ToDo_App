import React from "react";
import { Navbar, Footer } from "../../components/index";
import "./About.css";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="flex-wrapper">
      <Helmet>
        <title>Features Page</title>
      </Helmet>
      <Navbar />
      Features
      <Footer />
    </div>
  );
};

export default About;
