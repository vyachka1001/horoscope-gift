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
            <ZodiacCard to='/aries'>
                <ZodiacIcon src={Icon1}/>
                <ZodiacH2>Aries</ZodiacH2>
                <ZodiacP> 21 march - 20 apr.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/taurus'>
                <ZodiacIcon src={Icon2}/>
                <ZodiacH2>Taurus</ZodiacH2>
                <ZodiacP> 21 apr. - 20 may</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/gemini'>
                <ZodiacIcon src={Icon3}/>
                <ZodiacH2>Gemini</ZodiacH2>
                <ZodiacP> 21 may - 21 june</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/cancer'>
                <ZodiacIcon src={Icon4}/>
                <ZodiacH2>Cancer</ZodiacH2>
                <ZodiacP> 22 june- 22 july</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/leo'>
                <ZodiacIcon src={Icon5}/>
                <ZodiacH2>Leo</ZodiacH2>
                <ZodiacP> 23 july - 22 aug.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/virgo'>
                <ZodiacIcon src={Icon6}/>
                <ZodiacH2>Virgo</ZodiacH2>
                <ZodiacP> 23 aug. - 23 sept.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/libra'>
                <ZodiacIcon src={Icon7}/>
                <ZodiacH2>Libra</ZodiacH2>
                <ZodiacP> 24 sept. - 23 oct.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/scorpio'>
                <ZodiacIcon src={Icon8}/>
                <ZodiacH2>Scorpio</ZodiacH2>
                <ZodiacP> 24 oct. - 22 nov.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/sagittarius'>
                <ZodiacIcon src={Icon9}/>
                <ZodiacH2>Sagittarius</ZodiacH2>
                <ZodiacP> 23 nov. - 21 dec.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/capricorn'>
                <ZodiacIcon src={Icon10}/>
                <ZodiacH2>Capricorn</ZodiacH2>
                <ZodiacP> 22 dec. - 20 jan.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/aquarius'>
                <ZodiacIcon src={Icon11}/>
                <ZodiacH2>Aquarius</ZodiacH2>
                <ZodiacP> 21 jan. - 18 feb.</ZodiacP>
            </ZodiacCard>
            <ZodiacCard to='/pisces'>
                <ZodiacIcon src={Icon12}/>
                <ZodiacH2>Pisces</ZodiacH2>
                <ZodiacP> 19 feb. - 20 mar.</ZodiacP>
            </ZodiacCard>
        </ZodiacWrapper>
    </ZodiacContainer>
  )
}

export default Zodiac