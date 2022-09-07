import React from 'react'
import Footer from '../component/footer'
import Home from '../component/home'
import Navbar from './Navbar'
import Problem from '../component/problem'
import Layanan from './Layanan'
import Keunggulan from '../component/keunggulan'
import Biaya from './Biaya'
import About from '../component/about'
import Form from '../component/form'
import Contact from '../component/contact'
import CaraKerja from  '../component/carakerja'


function LandingPage() {
  return (
    <>
        <Navbar />
        <Home />
        <Problem />
        <Layanan />
        <Keunggulan />
        <CaraKerja />
        <Biaya />
        <About />
        <Form />
        <Contact />
        <Footer />
    </>
  )
}

export default LandingPage