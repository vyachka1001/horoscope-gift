import React from 'react'
import './horoscope_taurus.css'
import aries from '../../images/zodiac-signs/img-for-pages/stars.svg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsWind} from 'react-icons/bs'
import {GiHighGrass} from 'react-icons/gi'
import {AiFillFire} from 'react-icons/ai'
import {IoIosColorPalette} from 'react-icons/io'
import {RiHandHeartFill} from 'react-icons/ri'
import ShowDate from '../date/index'
import styled from 'styled-components'
import Feature from '../feature/feature';
import {FaUserTie} from 'react-icons/fa'
import {FaSmileBeam} from 'react-icons/fa'
import {FaLightbulb} from 'react-icons/fa'
import Video from '../../videos/space.mp4'

export const StyledIcons = styled.div`
    margin : none;
    font-size: 1.4rem ;

`
export const HoroscopeContainer = styled.div`
    height: 670px;
    width: 100%;
    z-index: 1;

`
export const Characteristich3 = styled.h3`
    margin-top: none;
    
`
export const Styledh5 = styled.h5`
    margin-top: none;
    
`
export const Styledh3 = styled.h3`
    margin-top: 20px;
    font-size: 19px;    
    color: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);

`
export const ContainerInfo = styled.div`  
    margin-top: 50px;
    margin: auto;
    height: 600px;
    width: 60%;
`
export const InfoTable = styled.div` 
  height: 370px;
  width: 100%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: var(--color-footer);

  background:-moz-radial-gradient(circle at 30% -100%, #B762C1 25%, rgb(61, 4, 84) 85%, rgb(66, 4, 84) 100%);

  background:-webkit-radial-gradient(circle at 30% -100%, #B762C1 25%, rgba(61, 4, 84) 85%, rgba(66, 4, 84) 100%);

  background:-o-radial-gradient(circle at 30% -100%, #B762C1 25%, rgba(61, 4, 84) 85%, rgba(66, 4, 84) 100%);

  background:-ms-radial-gradient(circle at 30% -100%, #B762C1 25%, rgba(61, 4, 84) 85%, rgba(66, 4, 84) 100%);

  background:radial-gradient(circle at 30% -100%, #B762C1 25%, rgba(61, 4, 81) 85%, rgba(66, 4, 84) 100%);

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const TitleContainer = styled.div`
  height: 70px; 
  text-align: center;
`  
export const InfoTitle = styled.h2`
    font-size: 2.1rem;
    color: #000;
`    
export const InfoColumns = styled.div`
    height: 80px;
    display: flex;
    text-align: center;
    color: #84DFFF;
    margin: 0px 0px 0px 0px;
`  
export const Column1 = styled.div`
    flex: 30%;
`  
export const Text = styled.h5`
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`  
export const InfoIcon = styled.div`
  color: #84DFFF;
  font-size: 1.4rem ;
`  
export const Column2 = styled.div`
    flex: 30%;
`  
export const Column3 = styled.div`
    flex: 30%;

`  
export const CharacteristicContainer = styled.div`
  text-align: center;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 20px; 

`
export const Characteristic = styled.h5`
  font-weight: normal;
  font-size: 16px;
  color: #000;
  margin-bottom: 50px; 
`
export const CharacterContainer = styled.div`
  text-align: center;
  height: 100px;
  margin-top: 10px;

`
export const Character = styled.h5`
  font-weight: normal;
  font-size: 16px;
  color: #84DFFF;
`  
export const InfoSection = styled.div`
  width: 100%;
`

export const Container = styled.div`
    width: 100%;
    height: 700px;
    background-position: center;
    background-size: cover;
    background-repeat: 'no-repeat';
    display: flex;
    color: #fff;
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
export const SecondContainer = styled.div`
    width: 100%;
    height: 500px;
    background-position: center;
    background-size: cover;
    background-repeat: 'no-repeat';
    display: flex;  
`
export const MainBg2 = styled.div`
    position: absolute;
    width: 100%;
    height: 500px;
    overflow: hidden;
`

export default class HoroscopeVirgo extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            json: {}
        }
    }
  
    componentDidMount() {
        const URL = 'https://aztro.sameerkumar.website/?sign=virgo&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(json => { this.setState({ json }); });
    }
  
    render() {
        return (
        <>
        <Container> 
            <MainBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg>
            <HoroscopeContainer>
              <section id='aries'>
              <h2>Virgo horoscope for today</h2>
              <h5><ShowDate /></h5>
              <div className="container horoscope_aries_container">
                <div className="left_column">
                  <div className="aries_image>">
                    <img src={aries} alt="aries image" />
                  </div>
                </div>

                <div className="right_column">
                  <div className="aries_cards">
                    <article className="card">
                      <StyledIcons><RiHandHeartFill /></StyledIcons>
                      <Styledh5>{this.state.json.compatibility}</Styledh5>
                      <small>Compatibility</small>
                    </article>

                    <article className="card">
                      <StyledIcons><GiHighGrass/></StyledIcons>
                      <Styledh5>Earth</Styledh5>
                      <small>Your element</small>
                    </article>

                    <article className="card">
                      <StyledIcons><IoIosColorPalette/></StyledIcons>
                      <Styledh5>{this.state.json.color}</Styledh5>
                      <small>Lucky color</small>
                    </article>
                  </div>

                  <horoscope>
                    <Styledh3>{this.state.json.description}</Styledh3>
                  </horoscope>
                </div>
              </div>
              </section>
            </HoroscopeContainer>
        </Container> 
        <SecondContainer>
            <MainBg2>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MainBg2>
            <InfoSection>
              <ContainerInfo>
                <InfoTable>
                  <TitleContainer>
                    <InfoTitle>Characteristic</InfoTitle>
                  </TitleContainer>
                  <InfoColumns>
                    <Column1>
                        <InfoIcon><FaSmileBeam/></InfoIcon>
                        <Text>Kind</Text>
                    </Column1>
                    <Column2>
                        <InfoIcon><FaUserTie/></InfoIcon>
                        <Text>Elegant</Text>  
                      </Column2>
                    <Column3>
                        <InfoIcon><FaLightbulb/></InfoIcon>
                        <Text>Creative</Text>  
                    </Column3>
                  </InfoColumns>
                  <CharacteristicContainer>
                    <Characteristic>Virgo is the second sign of the Earth element, personifying justice and purity. Virgo embodies the principle of order, the victory of reason over feelings, the ability to see the whole in detail. Virgo, more than other signs of the zodiac, strives for excellence in everything, studies all his life, but also teaches others. The desire for the best makes Virgo notice flaws in everything that surrounds her, which requires correction.</Characteristic>
                  </CharacteristicContainer>
                </InfoTable>
              </ContainerInfo>
            </InfoSection>
        </SecondContainer>
        </>
        )
    }
}
