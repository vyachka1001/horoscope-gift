import React, {useEffect, useContext} from 'react'
import TypeBar from '../typebar/typebar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CertificateList from '../catalog/certificate-list'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'
import styled from 'styled-components'
import {fetchCategory} from '../../http/certificate-API'
import {fetchCertificate} from '../../http/certificate-API'


export const CatalogContainer = styled.div`
    height: 900px;
    display: flex; 
    flex-direction: column;

`
export const ItemContainer = styled.div`
    height: 900px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
`

const CatalogPage = observer (() => {
    const {certificate} = useContext(Context)

    useEffect(() => {
        fetchCategory().then(data => certificate.setCategory(data))
        fetchCertificate().then(data => certificate.setCertificates(data))
    }, [])

    return (
        <CatalogContainer>
            <TypeBar />

            <CertificateList />
        </CatalogContainer>
    )
})

export default CatalogPage