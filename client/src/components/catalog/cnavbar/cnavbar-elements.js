import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav` 
    // background: ${({ scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    background: #000;
    height: 100px;
    // margin-top: -100px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position : sticky;
    top:0;
    z-index: 2;

@media screen and (max-width:960px ){
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex; 
width: 80%;
`
export const Column1 = styled.div`
    flex: 30%;
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: center;

`
export const Column2 = styled.div`
    flex: 33%;
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: center;

`
export const Column3 = styled.div`
    flex: 30%;
    // margin: auto;
    display: flex;
    text-align: center;
    justify-content: center;
`
export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer; 
font-size: 1.5rem;
display: flex;
align-items: center;
// margin-left: 24px;
font-weight: bold;
text-decoration: none;

`
export const MobileIcon = styled.div`
display: none; 

@media screen and (max-width : 768px){
    display : block; 
    position: absolute;
    top: 0;
    right: 0; 
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`
export const NavMenu = styled.ul`
    display: flex; 
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;

`
export const NavLinks = styled(LinkScroll)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

 &.active{
    border-bottom: 3px solid #B762C1;
 }
`

export const NavInfo = styled.nav`
    display: flex; 
    // align-items: center;
    // jusify-content: flex-end;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavCart = styled(LinkR)`
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    padding: 0px 22px;

    &:hover{
}
`
export const NavWishlist = styled(LinkR)`
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;


    &:hover{
}
`
export const NavPageLink = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
   border-bottom: 3px solid #B762C1;
}

`
export const NavBtnLinkSignUp = styled(LinkR)`
    color: #B762C1; 
    background: transparent;

    white-space: nowrap;
    font-size: 19px;
    font-weight: bold;

    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
    transition: all 0.2s ease-in-out;
    color: #EA99D5;
`
export const Icon = styled.div`
    color: #fff;
    font-size: 1.4rem;
    padding-top: 7px;
    
`
export const Text = styled.h4`
    font-weight: normal;
    font-size: 14px;

`