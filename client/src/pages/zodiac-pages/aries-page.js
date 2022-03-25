import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Aries from '../../components/zodiac-signs/aries'


const AriesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Aries />
    </>
  )
}

export default AriesPage