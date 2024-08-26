import React from "react";
import DarkNavbar from "../components/Home/DarkNavbar/Navbar";
import Panar from "../components/Home/Panar/Panar";
import Contact from "../components/ContactUs/Contact";
import Footer from '../components/Home/Footer/Footer'

const ContactUs = () => {
  return (
    <div>
      <DarkNavbar/>
      <Panar />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default ContactUs;
