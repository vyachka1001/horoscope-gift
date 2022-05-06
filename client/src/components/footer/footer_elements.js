import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;
export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? '#000' : '#B762C1')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;
export const FooterContainer = styled.div`
	// background-color: #000;
	padding: 4rem 0 2rem 0;
`;

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	// color: #fff;
`;

export const FooterSubHeading = styled.p`
	// font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}

		> div:first-child {
			width: 100%;
		}
	}

	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;

		* {
			width: 100%;
			text-align: center;
		}
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
	// background: #84DFFF;
	padding-bottom: 2rem;
`;

export const FooterColumn = styled(Column)`
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLinkTitle = styled.h2`
	margin-bottom: 16px;
	color: #000;
	text-align: center;

`;

export const FooterLink = styled(Link)`
	color: #000;
	text-decoration: none;
	margin-bottom: 0.5rem;
	text-align: center;
	// display: flex;
	&:hover {

		color: #84DFFF;
		transition: 0.3s ease-out;
	}
`;

export const FooterLogo = styled(Link)`
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.7rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	margin-bottom: 16px;

`;

export const SocialIcon = styled.img`
	margin-right: 10px;
	width: 40px;
`;

export const FooterRights = styled.div`
	color: #000;
	// margin: 16px 16px 16px 0 ;
	width: 100%;
	font-size: 0.8rem;
	text-align: center;
	border-top: 1px solid  #84DFFF;
	padding: 1rem 0;
	// margin: 1rem 0 0;
`;

export const FooterSocialIcon = styled.a`
	// color: #fff;
	font-size: 24px;

	&:hover {
		color: #000;
		transition: 0.3s ease-out;
	}
`;

export const FooterAddress = styled.div`
	color: #000;
	margin: 0.4rem auto 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;

	@media screen and (min-width: 1000px) {
		margin-left: 0px;
		text-align: left;
		margin-right: 1rem;
	}
`;


export const FooterTextLogo = styled.h5`
	color: #84DFFF;
	
`
export const FooterIcon = styled.div`
	margin-top: 5px;
	margin-right: 5px;
	font-size: 2rem;

`