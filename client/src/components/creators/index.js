import React from 'react'
import styled from 'styled-components'
import Video from '../../videos/space.mp4'
import GlassCardsPage from './glass-card'


export const FormImage = styled.div`
    background-image: url(${Image});
    width: 100%;
    height: 900px;
    background-position: center;
    background-size: cover;
    background-repeat: 'no-repeat';
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    width: 100%;
    height: 900px;
    background-position: center;
    background-size: cover;
    background-repeat: 'no-repeat';
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const MainBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`


const CreatorsPage = () => {
  return (
      <>
        <Container> 
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <GlassCardsPage/>
        </Container>  
      </>
  )
}

export default CreatorsPage