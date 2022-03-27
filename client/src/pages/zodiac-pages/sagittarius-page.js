import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import HoroscopeSagittarius from '../../components/horoscope-pages/horoscope_sagittarius'

const AriesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HoroscopeSagittarius />
    </>
  )
}

export default AriesPage