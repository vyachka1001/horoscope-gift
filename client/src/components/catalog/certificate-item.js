import React from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {CERTIFICATE_ROUTE} from '../../utils/consts'
import './catalog-elements.css'
import * as BsIcons from 'react-icons/bs'
import * as IoIoIcons from 'react-icons/io'
import {Link} from 'react-router-dom'


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

    // let { title, old_price, newPrice, rupess, exp_date } = props

  return (
    <>
    {/* <ItemCard onClick={() => history.push('/catalog/certificate' + '/' + certificate.id)}>
        <CardIcon src={process.env.REACT_APP_API_URL + certificate.img}/>
        <CardDescription>
            <CardH2>{certificate.name}</CardH2>
            <CardH2>{certificate.price}</CardH2>

            <CardRating>{certificate.rating}</CardRating>
        </CardDescription>
    </ItemCard>  */}
    
    
            <div className="catalog_card" onClick={() => history.push('/catalog/certificate' + '/' + certificate.id)}>
                <div className="warpper">
                    <div ></div>
                    <CardIcon src={process.env.REACT_APP_API_URL + certificate.img} ></CardIcon>
                    <div className="heart">
                    <Link to='#' className='icon_heart'>

                        <BsIcons.BsHeartFill />
                    </Link>    
{/* 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z">
                            </path> 
                        </svg> */}
                    </div>
                    <div className="cardInfo">
                        <h1>{}</h1>
                        <p className="date_">{certificate.name}</p>
                        <div className="action">
                            <div className="priceGroup">
                                {/* <p className="price old_price">150</p> */}
                                <p className="price newPrice">{certificate.price}$</p>
                            </div>
                            <div className="cart">
                            <Link to='#' className='icon_cart'>
                                <BsIcons.BsFillCartFill />
                                </Link>   

                                {/* <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path d="M2 6h10l10 40h32l8-24H16"></path>
                                    <circle cx="23" cy="54" r="4"></circle>
                                    <circle cx="49" cy="54" r="4"></circle>
                                </svg> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

            </>
  )
}

export default CertificateItem