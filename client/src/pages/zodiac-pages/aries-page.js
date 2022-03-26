import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
// import Aries from '../../components/zodiac-signs/aries'
import HoroscopeAries from '../../components/horoscope-pages/horoscope_aries'
// import {AriesData} from '../../components/horoscope-pages/horoscope_aries'

const AriesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HoroscopeAries />
    </>
  )
}

export default AriesPage