import React from 'react'
import  Navbar from '../components/Home/Navbar/Navbar'
import Panar from '../components/Home/Panar/Panar'
import Vision from '../components/About/Vision/Vision'
import OurTeam from '../components/About/OurTeam/OurTeam'
import Clients from '../components/Home/Clients/Clients'
import Footer from '../components/Home/Footer/Footer'
const About = () => {
  return (
    <>
        <Navbar/>
        <Panar/>
        <Vision/>
        <OurTeam/>
        <Clients/>
        <Footer/>
    </>
  )
}

export default About