import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'


export const ZodiacContainer = styled.div`
    height: 900px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ZodiacWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 30px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns:1fr;
        padding: 0 20px;
    }

`

export const ZodiacCard = styled(LinkR)`
    background: #B762C1;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
    height: 210px;
    width: 210px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: #EA99D5;
        transform: scale(1.02);
        transition: all 0.1s ease-in-out;
        cursor: pointer;

    }

 
`
export const ZodiacIcon = styled.img`
    height: 85px;
    width: 85px; 
    margin-bottom: 10px;
`

export const ZodiacH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 50px;
    padding: 0;
    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const ZodiacH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 5px;
    color: #fff;
`
export const ZodiacP = styled.p`
    font-size: 18px;
    text-align: center;
    color: #000;

`

// Aries 
// Taurus 
// Gemini
// Cancer
// Leo
// Virgo
// Libra
// Scorpio
// Sagittarius
// Capricorn
// Aquarius
// Pisces
