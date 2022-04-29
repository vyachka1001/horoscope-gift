import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, Column1, Column2, Column3, NavWishlist, NavPageLink, Icon, Text, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks, NavInfo, NavCart, NavBtnLinkSignUp} from './cnavbar-elements'
import {animateScroll as scroll} from 'react-scroll'
import Dropdown from "../pop-up-categories/index";
import {IoHeart} from 'react-icons/io5'
import {IoCartSharp} from 'react-icons/io5'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {TiArrowBack} from 'react-icons/ti'
import {IoArrowUndoSharp} from 'react-icons/io5'



const CNavbar = ({ toggle }) => {
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

  const [selected, setSelected] = useState("Categories");


return (
   <>   
   <Nav scrollNav={scrollNav}>
     <NavbarContainer>
      <Column1>
        <NavLogo to='/' onClick={toggleHome} >
            <IoArrowUndoSharp />
          </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      </Column1>
      <Column2>
        <NavMenu>
          <NavItem>
            <Dropdown selected={selected} setSelected={setSelected} />
          {/* <NavPageLink to= '/creators'>Creators</NavPageLink> */}
          </NavItem> 
        </NavMenu>   
      </Column2>
      <Column3>
        <NavInfo>
          <NavWishlist>
            <Icon>
              <IoHeart/>
            </Icon>
            <Text>Your Wishlist</Text>
          </NavWishlist>
          <NavCart>
            <Icon>
              <IoCartSharp/>
            </Icon>
            <Text>Your Cart</Text>
          </NavCart>
        </NavInfo>
      </Column3>
      
     </NavbarContainer>
   </Nav>
   </>
  );
};

export default CNavbar;