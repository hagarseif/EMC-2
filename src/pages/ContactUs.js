import React from "react";
import Navbar from "../components/Home/Navbar/Navbar";
import Panar from "../components/Home/Panar/Panar";
import Contact from "../components/ContactUs/Contact";
import Footer from '../components/Home/Footer/Footer'

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Panar />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
