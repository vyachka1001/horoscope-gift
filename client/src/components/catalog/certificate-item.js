import React from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {CERTIFICATE_ROUTE} from '../../utils/consts'
import './catalog-elements.css'
import * as BsIcons from 'react-icons/bs'
import * as IoIoIcons from 'react-icons/io'
import {Link} from 'react-router-dom'
import {IoCartSharp} from 'react-icons/io5'

export const ItemCard = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    height: 250px;
    width: 350px;
    // box-shadow: 2px 1px 2px #B762C1;
    transition: all 0.1s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    background: #B762C1;
    // border: 1px solid #B762C1;
    }

`
export const CardIcon = styled.img`
    background-size:contain;
    background-position: center bottom;
    background-repeat: no-repeat;
    position:absolute;
    bottom:calc(100% - 200px);
    width:100%;
    height:200px;
    transition:ease all .3s;



    // display: flex; 
    // flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    border-radius:  30px 30px 0 0;
    // height: 250px;
    // width: 350px;
    // transition: all 0.1s ease-in-out;
`
export const CardDescription = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
    margin-top: 5px;

`
export const CardH2 = styled.h2`
    font-size: 18px;
`

export const CardRating = styled.div`
    margin-left: 70px;
`

const CertificateItem = ({certificate}) => {
    const history = useHistory()

  return (
    <>
            <div className="catalog_card" onClick={() => history.push('/catalog/certificate' + '/' + certificate.id)}>
                <div className="warpper">
                    <div ></div>
                    <CardIcon src={process.env.REACT_APP_API_URL + certificate.img} ></CardIcon>
                    <div className="heart">
                    <Link to='#' className='icon_heart'>
                        <BsIcons.BsHeartFill />
                    </Link>    
                    </div>
                    <div className="cardInfo">
                        <h1>{}</h1>
                        <p className="date_">{certificate.name}</p>
                        <div className="action">
                            <div className="priceGroup">
                                <p className="price newPrice">{certificate.price} р.</p>
                            </div>
                            <div className="cart">
                            <Link to='#' className='icon_cart'>
                                <IoCartSharp/>
                                </Link>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

    </>
  )
}

export default CertificateItem