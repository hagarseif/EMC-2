import React from 'react'
import  DarkNavbar from '../components/Home/DarkNavbar/Navbar'
import Panar from '../components/Home/Panar/Panar'
import Vision from '../components/About/Vision/Vision'
import OurTeam from '../components/About/OurTeam/OurTeam'
import Clients from '../components/Home/Clients/Clients'
import Footer from '../components/Home/Footer/Footer'
const About = () => {
  return (
    <>
        <DarkNavbar/>
        <Panar/>
        <Vision/>
        <OurTeam/>
        <Clients/>
        <Footer/>
    </>
  )
}

export default About