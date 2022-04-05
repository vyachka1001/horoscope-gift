import React from 'react'
import styled from 'styled-components'
import profile from '../../images/clients/user.svg'
import { useSpring, animated, config} from 'react-spring'



export const GlassCard = styled.styled(animated.div)`
// export const GlassCard = styled.div
    display: inline-block;
    // padding: 3em;
    background: #C7D2FE66;
    border-radius: 30px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(5px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
    height: 400px;
    width: 400px;
    text-align: center;
`

export const CreatorImage = styled.img`
    width: 200px;
    height: auto;
    border: 1px solid #000;
    border-radius: 50%;
    margin-top: 50px ;
    margin-left: 100px;
    margin-bottom: 20px;
    
`
export const CardH1 = styled.h1`
   line-heright: 1.5;
   letter-spacing: 1.5;
   color: #000;
    
`
export const CardH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-size: 16px;
    color: #000;

`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) `

const GlassCardPage = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config:{ mass: 10, tension: 200, friction: 50 } }))

  return (
    <GlassCard
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set ({xys: [0,0,1]})}
        style={{ 
            transform: props.xys.interpolate(trans)
        }}
    >
        <CreatorImage src={profile} />
        <CardH1>Alexey Zaitsev</CardH1>
        <CardH3>Full Stack Developer</CardH3>

    </GlassCard>
  )
}

export default GlassCardPage