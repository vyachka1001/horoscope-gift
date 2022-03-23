import React from 'react'
import Video from '../../videos/video.mp4'
import { MainContainer, MainBg, VideoBg } from './main-section_elements'

const MainSection = () => {
  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
    </MainContainer>
  )
}

export default MainSection