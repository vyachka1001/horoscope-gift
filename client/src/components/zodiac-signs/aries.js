import React from 'react'
import ShowDate from '../date'
import {Button} from '../button_element'
import {Container, Container2, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column2, ImgWrap, Img} from './aries_elements'


const Aries = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) => {

  return (
    <>
      {/* <Container>
        <h1>Aries horoscope for today</h1>
        <ShowDate /> 
        <h1>Certificate recommendations</h1>
      </Container> */}

      <Container2 id={id}>
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
                  <Button to='home'>{buttonLabel}</Button>
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