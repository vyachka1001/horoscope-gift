import React from 'react'
import styled from 'styled-components'
import Video from '../../videos/creators.mp4'
import Image from '../../images/clients/1.jpg'
import profile from '../../images/clients/user.svg'
import GlassCardPage from './glass-card'


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
   
    
`


const CreatorsPage = () => {
  return (
      <>
       <Container> 
             <FormImage>
                <GlassCardPage />
             </FormImage> 
         </Container> 
      </>
  )
}

export default CreatorsPage