import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavBtn, NavBtnLink, NavBtnLinkSignUp} from './navbar_elements'
import {animateScroll as scroll} from 'react-scroll'

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
          <NavLinks to= 'zodiac' smooth={true} duration={1500} spy={true} exact='true' offset={-80}>Zodiac</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to= 'discover'>Discover</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to= 'services'>Services</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to= 'signup'>Sign Up</NavLinks>
        </NavItem>
      </NavMenu>    
      <NavBtn>
        <NavBtnLinkSignUp to='/signup' >Sign Up</NavBtnLinkSignUp>
        <NavBtnLink to= '/login'>Log In</NavBtnLink>
      </NavBtn>
     </NavbarContainer>
   </Nav>
   </>
  );
};

export default Navbar;