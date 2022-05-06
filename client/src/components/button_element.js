import styled from 'styled-components'
import {Link} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#B762C1' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline : none;
    border: none;
    cursor: pointer; 
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#EA99D5' : '#B762C1')};

    }


`
export const NEWButton = styled(LinkScroll)`
    display: flex;
    justify-content: center;
    align-items: center;
	border-radius: 30px;
	background: none;
	white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '15px 30px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '18px')};
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.7s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;

	}
	&:hover {
		color: black;
	}
`;
export const NEWButton2 = styled(LinkR)`
    display: flex;
    justify-content: center;
    align-items: center;
	border-radius: 30px;
	background: none;
	white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '15px 30px')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '18px')};
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.7s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;

	}
	&:hover {
		color: black;
	}
`;