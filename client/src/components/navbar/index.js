import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, HeroButtonLog, HeroButtonSign,  NavPageLink, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavBtn, NavBtnLink, NavBtnLinkSignUp} from './navbar_elements'
import {animateScroll as scroll} from 'react-scroll'
import {NEWButton} from '../button_element'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 300) {
      setScrollNav(true)

    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

return (
   <>   
   <Nav scrollNav={scrollNav}>
     <NavbarContainer>
      <NavLogo to='/' onClick={toggleHome} >horoscope</NavLogo>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to= 'zodiac' smooth={true} duration={1500} spy={true} exact='true' offset={-80}>Zodiac Signs</NavLinks>
        </NavItem>
        <NavItem>
          <NavPageLink to= '/catalog'>Catalog</NavPageLink>
        </NavItem>
        <NavItem>
          <NavPageLink to= '/creators'>Creators</NavPageLink>
        </NavItem>
        <NavItem>
          <NavLinks to= 'signup'></NavLinks>
        </NavItem>
      </NavMenu>    
      <NavBtn>
        <NavBtnLinkSignUp to='/signup' >Sign Up</NavBtnLinkSignUp>
        <HeroButtonLog to= '/login'>Log In</HeroButtonLog>
      </NavBtn>
     </NavbarContainer>
   </Nav>
   </>
  );
};

export default Navbar;