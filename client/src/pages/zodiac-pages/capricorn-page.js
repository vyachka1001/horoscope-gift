import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import HoroscopeCapricorn from '../../components/horoscope-pages/horoscope_capricorn'

const AriesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HoroscopeCapricorn />
    </>
  )
}

export default AriesPage