import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OurExperties from '../components/OurExpertise'
import PastWorksnapshot from '../components/PastWorksnapshot'
import Footer from '../components/Footer'
import Contact from '../components/Contactc'



const Home = () => {
  return (
    <>
      
     <Navbar/>
     <Hero/>
     <OurExperties/>
      <PastWorksnapshot/>
      <Contact/>
      <Footer/>
     
    </>
  )
}

export default Home
