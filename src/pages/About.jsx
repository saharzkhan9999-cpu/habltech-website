import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import Promise from '../components/Promise'
import FooterCTA from '../components/About_footer'
import OurApproach from '../components/OurApproach'
import Footer from '../components/Footer'

const About = () => {
  return (
    <section>
        <Navbar/>
        <AboutHero/>
        
        <OurApproach/>
        <Promise/>
        <Footer/>
    </section>
  )
}

export default About
