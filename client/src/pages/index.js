import React, {useState} from 'react'
import MainSection from '../components/main-section'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Zodiac from '../components/zodiac-section'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />    
        <MainSection />
        <Zodiac />
    </>
  )
}

export default Home