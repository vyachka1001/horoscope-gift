import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const CertificatesContainer = styled.div`

    height: 900px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`