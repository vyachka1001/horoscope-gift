import React, {useState} from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Aries from '../../components/zodiac-signs/aries'
import {ariesData} from '../../components/zodiac-signs/data'

const AriesPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Aries {...ariesData}/>
    </>
  )
}

export default AriesPage