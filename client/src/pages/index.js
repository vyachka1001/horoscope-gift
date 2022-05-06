import React, {useState} from 'react'
import MainSection from '../components/main-section'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import ZodiacSection from '../components/zodiac-section'
import Footer from '../components/footer/footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
        <Navbar toggle={toggle} />    
        <MainSection />
        <ZodiacSection />
        <Footer />
    </>
  )
}

export default Home