import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import HoroscopeLeo from '../../components/horoscope-pages/horoscope_leo'

const AriesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HoroscopeLeo />
    </>
  )
}

export default AriesPage