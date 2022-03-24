import React from 'react'
import Icon1 from '../../images/zodiac-signs/pack2/006-aries.png'
import Icon2 from '../../images/zodiac-signs/pack2/002-taurus.png'
import Icon3 from '../../images/zodiac-signs/pack2/003-gemini.png'
import Icon4 from '../../images/zodiac-signs/pack2/007-cancer.png'
import Icon5 from '../../images/zodiac-signs/pack2/004-leo.png'
import Icon6 from '../../images/zodiac-signs/pack2/010-virgo.png'
import Icon7 from '../../images/zodiac-signs/pack2/008-libra.png'
import Icon8 from '../../images/zodiac-signs/pack2/011-scorpio.png'
import Icon9 from '../../images/zodiac-signs/pack2/012-sagittarius.png'
import Icon10 from '../../images/zodiac-signs/pack2/005-capricorn.png'
import Icon11 from '../../images/zodiac-signs/pack2/001-aquarius.png'
import Icon12 from '../../images/zodiac-signs/pack2/009-pisces.png'

import {ZodiacContainer, ZodiacH1, ZodiacWrapper, ZodiacCard, ZodiacIcon, ZodiacH2, ZodiacP} from './zodiac_elements'


const Zodiac = () => {
  return (
    <ZodiacContainer id ="zodiac">
        <ZodiacH1>Choose your zodiac sign</ZodiacH1>
        <ZodiacWrapper>
            <ZodiacCard>
                <ZodiacIcon src={Icon1}/>
                <ZodiacH2>Aries</ZodiacH2>
                <ZodiacP> 21 march - 20 april</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon2}/>
                <ZodiacH2>Taurus</ZodiacH2>
                <ZodiacP> 21 april - 20 may</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon3}/>
                <ZodiacH2>Gemini</ZodiacH2>
                <ZodiacP> 21 may - 21 june</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon4}/>
                <ZodiacH2>Cancer</ZodiacH2>
                <ZodiacP> 22 june- 22 july</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon5}/>
                <ZodiacH2>Leo</ZodiacH2>
                <ZodiacP> 23 july - 22 august</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon6}/>
                <ZodiacH2>Virgo</ZodiacH2>
                <ZodiacP> 23 august - 23 september</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon7}/>
                <ZodiacH2>Libra</ZodiacH2>
                <ZodiacP> 24 september - 23 october</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon8}/>
                <ZodiacH2>Scorpio</ZodiacH2>
                <ZodiacP> 24 october - 22 november</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon9}/>
                <ZodiacH2>Sagittarius</ZodiacH2>
                <ZodiacP> 23 november - 21 december</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon10}/>
                <ZodiacH2>Capricorn</ZodiacH2>
                <ZodiacP> 22 december - 20 january</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon11}/>
                <ZodiacH2>Aquarius</ZodiacH2>
                <ZodiacP> 21 january - 18 february</ZodiacP>
            </ZodiacCard>
            <ZodiacCard>
                <ZodiacIcon src={Icon12}/>
                <ZodiacH2>Pisces</ZodiacH2>
                <ZodiacP> 19 february - 20 march</ZodiacP>
            </ZodiacCard>
        </ZodiacWrapper>
    </ZodiacContainer>
  )
}

export default Zodiac