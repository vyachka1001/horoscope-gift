import React, {useState} from 'react'
import Video from '../../videos/white.mp4'
import {Button} from '../button_element'
import { MainContainer, MainBg, VideoBg, MainSectionContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight } from './main-section_elements'

const MainSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainSectionContent>
        <MainH1>Horoscope gift</MainH1>
        <MainP>
          Find out by the stars what kind of rest you need
        </MainP>
        <MainBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>  
        </MainBtnWrapper>
      </MainSectionContent>
    </MainContainer>
  )
}

export default MainSection