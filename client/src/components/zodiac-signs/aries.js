import React from 'react'
import ShowDate from '../date'
import {Button} from '../button_element'
import {Container, Container2, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from './aries_elements'


const Aries = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary}) => {

  return (
    <>
      <Container2 lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}
                  <ShowDate /> 
                </Subtitle>
                <BtnWrap>
                  <Button to='/' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1:0}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </Container2>
    </>
  )
}

export default Aries