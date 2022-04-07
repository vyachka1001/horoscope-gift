import React, {useState , useContext} from 'react'
import './sidebar.css'
import * as FaIcnos from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'

import {observer} from 'mobx-react-lite'
import {ListGroup} from 'react-bootstrap'
import {Context} from '../../../index'
import { IconContext } from 'react-icons'
import styled from 'styled-components'


export const CategoryH1 = styled.h1`
color: #fff;
cursor: pointer; 
font-size: 24px;
font-weight: bold;
text-decoration: none;

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 15px 0px 15px 16px;
    list-style: none;

`
export const ZodiacH1 = styled.h1`
    font-size: ;
    color: #fff;
    margin-bottom: 50px;
    padding: 0;
    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`







const Sidebar = observer (() => {

    const {certificate} = useContext(Context)
    
    const [sidebar, setSidebar] = useState(false);

    const showSidebar =() => setSidebar(!sidebar);

  return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className ='navbar'>
            <Link to='#' className='menu-bars'>
                <FaIcnos.FaBars onClick={showSidebar}/>
            </Link>
        </div> 
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {/* <ListGroup > */}
                    {certificate.category.map(category => 
                        <ZodiacH1 className='nav-text'
                            style={{
                                cursor: 'pointer'}}
                            onClick={() => certificate.setSelectedCategory(category)}
                            key={category.id}>

                            <span>{category.name}</span>
                        </ZodiacH1>)}
                {/* </ListGroup> */}
            </ul>
        </nav>
        </IconContext.Provider>
    </>

    
  )
})

export default Sidebar