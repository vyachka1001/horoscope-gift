import React from 'react'
import styled from 'styled-components'
import Alexey from '../../images/creators/user.svg'
import Slava from '../../images/creators/user.svg'
import { useSpring, animated } from 'react-spring'


export const Container = styled.div`

`
export const GlassCard = styled(animated.div)`
    display: inline-block;
    // background: #C7D2FE66;
    //  background: #F0F1F8;
    border-radius: 30px;
    z-index: 1;
    position: relative;
    // backdrop-filter: blur(3px);
    // border: 1px solid #B762C1;
    border: 1px solid transparent;

    background-clip: border-box;
    cursor: pointer;
    height: 400px;
    width: 400px;
    text-align: center;
    margin-right: 50px;
    margin-left: 50px;

`

export const CreatorImage = styled.img`
    width: 220px;
    height: 220px;
    border: 1px solid #B762C1;
    border-radius: 50%;
    margin-top: 50px ;
    margin-left: 90px;
    margin-bottom: 30px;
    
`
export const CardH1 = styled.h1`
   line-heright: 1.5;
   letter-spacing: 1.5;
   color: #fff;
    
`
export const CardH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-size: 16px;
    color: #B762C1;

`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `


const calc2 = (a, b) => [-(b - window.innerHeight / 2) / 20, (a - window.innerWidth / 2) / 20, 1]
const trans2 = (a, b, c) => `perspective(600px) rotateX(${a}deg) rotateY(${b}deg) scale(${c}) `

const GlassCardsPage = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config:{ mass: 8, tension: 250, friction: 8 }, abc: [0, 0, 1], config:{ mass: 8, tension: 250, friction: 8 }}))


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
            <CardH3>Full Stack Developer</CardH3>

            
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
            <CardH3>Full Stack Developer</CardH3>

            
        </GlassCard>
    </Container>
  )
}

export default GlassCardsPage