import React from 'react'
import styled from 'styled-components'
import Alexey from '../../images/creators/alexey.png'
import Slava from '../../images/creators/slava.png'
import { useSpring, animated } from 'react-spring'
import {BsGithub} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTelegramPlane} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './glass-card.css'

export const Container = styled.div`

`
export const GlassCard = styled(animated.div)`
    display: inline-block;
    // background: #C7D2FE66;
    // backgroung: #fff;
    //  background: #F0F1F8;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(5px);
    // border: 1px solid #B762C1;
    // border: 1spx solid transparent;
    border-radius: 20%;

    background-clip: border-box;
    // cursor: pointer;
    height: 440px;
    width: 420px;
    text-align: center;
    margin-right: 50px;
    margin-left: 50px;
    border: 1px solid #B762C1;
padding : 20px;
`

export const CreatorImage = styled.img`
    width: 250px;
    height: 250px;
    // border: 1px solid #B762C1;  
    border-radius: 50%;
    margin-top: 20px ;
    margin-left: 70px;
    margin-bottom: 20px;
    // backdrop-filter: blur(7px);

    margin: auto;
`
export const CardH1 = styled.h1`
   line-heright: 1.5;
   letter-spacing: 1.5;
   color: #fff;
//    border: 1px solid #B762C1;  
    
`
export const CardH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-size: 16px;
    color: #B762C1;

`
export const CardIcon = styled.div`
  color: #84DFFF;
  font-size: 1.5rem ;
  cursor: pointer;

 
`  

export const IconContainer = styled.div`
margin-top:10px;
    display: flex;
    // text-align: center;
    height: 20px;
`
export const Icon1 = styled.div`
flex: 30%;
   
`
export const Icon2 = styled.div`
flex: 30%;
   
`
export const Icon3 = styled.div`
 flex: 30%;
//  margin-right: 60px;

`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `


const calc2 = (a, b) => [-(b - window.innerHeight / 2) / 20, (a - window.innerWidth / 2) / 20, 1]
const trans2 = (a, b, c) => `perspective(600px) rotateX(${a}deg) rotateY(${b}deg) scale(${c}) `

const GlassCardsPage = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config:{ mass: 15, tension: 150, friction: 8 }, abc: [0, 0, 1], config:{ mass: 15, tension: 150, friction: 8 }}))


  return (
    <Container>
        <GlassCard
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set ({xys: [0,0,1]})}
            style={{ 
                transform: props.xys.interpolate(trans)
            }}
        >
            <CreatorImage src={Alexey} />
            <CardH1>Alexey Zaitsev</CardH1>
             <CardH3>BSUIR, POIT</CardH3>
            <CardH3>Belarus, Minsk</CardH3> 
            <IconContainer>
                <Icon1>
                    <CardIcon><a href="https://t.me/lzaitsevl" ><FaTelegramPlane/></a></CardIcon>
                </Icon1>
                <Icon2>
                    <CardIcon><a href="https://github.com/harvidston" ><BsGithub/></a></CardIcon>
                </Icon2>
                <Icon3>
                    <CardIcon><a href="https://www.instagram.com/lzaitsevl/"><RiInstagramFill/></a></CardIcon>

                </Icon3>
            </IconContainer>
        </GlassCard>
        <GlassCard
            onMouseMove={({clientX: a, clientY: b}) => (set({abc: calc2(a, b)}))}
            onMouseLeave={() => set ({abc: [0,0,1]})}
            style={{ 
                transform: props.abc.interpolate(trans2)
            }}
        >
            <CreatorImage src={Slava} />
            <CardH1>Viachaslau Viarbitski</CardH1>
            <CardH3>BSUIR, POIT</CardH3>
            <CardH3>Belarus, Mogilev</CardH3> 
            <IconContainer>
            <Icon1>
                    <CardIcon><a href="https://t.me/vyachka_01" ><FaTelegramPlane/></a></CardIcon>
                </Icon1>
                <Icon2>
                    <CardIcon><a href="https://github.com/vyachka1001" ><BsGithub/></a></CardIcon>
                </Icon2>
                <Icon3>
                    <CardIcon><a href="https://www.instagram.com/_vyachka/"><RiInstagramFill/></a></CardIcon>

                </Icon3>
            </IconContainer>
        </GlassCard>
    </Container>
  )
}

export default GlassCardsPage