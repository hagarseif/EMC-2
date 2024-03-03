import React from 'react'
import  Navbar from '../components/Home/Navbar/Navbar'
import Panar from '../components/Home/Panar/Panar'
import AboutUs from '../components/About/About/About'
import Steps from '../components/About/Steps/Steps'
import Vision from '../components/About/Vision/Vision'
import OurTeam from '../components/About/OurTeam/OurTeam'
import Footer from '../components/Home/Footer/Footer'
const About = () => {
  return (
    <>
        <Navbar/>
        <Panar/>
        <AboutUs/>
        <Steps/>
        <Vision/>
        <OurTeam/>
        <Footer/>
    </>
  )
}

export default About