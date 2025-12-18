import React from 'react'
import Navbar from '../components/Navbar'
import Contactc from '../components/Contactc'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <section className='w-full mt-16 mb-2 '>
      <Contactc/>
      </section>
      <Footer/>
    </>
  )
}

export default Contact
