import React from 'react'
import styled from 'styled-components'

export const CertificatePageContainer = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
`
export const CertificateDescription = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
`
export const CertificatePrice = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
`
export const CertificateRating = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
`
export const CertificateH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 5px;
    color: #fff;
`
export const InfoH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 5px;
    color: #fff;
`
export const CertificateInfo = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
`
export const PageIcon = styled.img`
    height: 85px;
    width: 85px; 
    margin-bottom: 10px;
`

const CertificatePersonalPage = () => {
    const certificate = [
        {id: 1, name: "4 hours in the spa", price: 200, rating: 4, img: ''},

    ]
    const certificateInfo = [
        {id:1, title: 'Spa LOGOS', description: "Best spa you've ever seen! "},

    ]
    return (
        <CertificatePageContainer>
            <PageIcon src={certificate.img}/>
            <CertificateDescription>
                <CertificateH2>{certificate.name}</CertificateH2>
                <CertificateRating>{certificate.rating}</CertificateRating>
                <CertificatePrice>{certificate.price}</CertificatePrice>
                <CertificateInfo>
                    {certificateInfo.map(info => 
                        <InfoH2 key={info.id} >
                                {info.title}: {info.description}
                        </InfoH2>
                    )}
                </CertificateInfo>
            </CertificateDescription>
        </CertificatePageContainer>
    )
}

export default CertificatePersonalPage