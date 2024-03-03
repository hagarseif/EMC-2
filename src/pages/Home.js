import React from 'react'
import Navbar from '../components/Home/Navbar/Navbar'
import Panar from '../components/Home/Panar/Panar'
import About from '../components/Home/About/About'
import Features from '../components/Home/Features/Features'
import Services from '../components/Home/Services/Services'
import Process from '../components/Home/Process/Process'
import Industry from '../components/Home/Industries/Industry'
import OurWork from '../components/Home/OurWork/OurWork'
import Team from '../components/Home/Team/Team'
import Footer from '../components/Home/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Panar/>
        <About/>
        <Features/>
        <Services/>
        <Process/>
        <Industry/>
        <OurWork/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home