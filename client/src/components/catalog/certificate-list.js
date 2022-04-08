import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'
import {Row} from 'react-bootstrap'
import CertificateItem from './certificate-item'
import styled from 'styled-components'

export const ItemWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 30px;
margin-top: 30px;

`

const CertificateList = observer( () => {


    const {certificate} = useContext(Context)
    return (
        
                <ItemWrapper>
                
                {certificate.certificates.map(certificate => 
                    <CertificateItem key={certificate.id} certificate={certificate}/>
                    )}
                    
                 </ItemWrapper>
          
    )
})

export default CertificateList