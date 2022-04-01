import React from 'react'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {CERTIFICATE_ROUTE} from '../../utils/consts'


export const ItemCard = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
    height: 250px;
    width: 350px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0.2);
    transition: all 0.1s ease-in-out;
    text-decoration: none;


    display: inline-block;
    padding: 3em;
    background: #C7D2FE66;
    cursor: pointer;

    }

`
export const CardIcon = styled.img`
    height: 85px;
    width: 85px; 
    margin-bottom: 10px;
`
export const CardDescription = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
`
export const CardH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 5px;
    color: #fff;
`

export const CardRating = styled.div`

`

const CertificateItem = ({certificate}) => {
    const history = useHistory()
  return (
    
    <ItemCard onClick={() => history.push('/catalog/certificate' + '/' + certificate.id)}>
        <CardIcon src={process.env.REACT_APP_API_URL + certificate.img}/>
        <CardDescription>
            <CardH2>{certificate.name}</CardH2>
            <CardRating>{certificate.rating}</CardRating>
        </CardDescription>
    </ItemCard>
    
  )
}

export default CertificateItem