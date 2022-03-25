import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
color: #fff;

:before{
    content:'';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(180deg, rgba (0,0,0,0.2) 0%, rgba (0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba (0,0,0,0.2) 0%, transparent 100%);
    z-index:2;
}
`
