import React, {useState, useEffect} from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
    Row, 
    Section,
	FooterTextLogo, 
	FooterIcon
} from './footer_elements';
import { footerData, footerSocialData } from '../data/footer_data';
import {GiStarSattelites} from 'react-icons/gi'
import {animateScroll as scroll} from 'react-scroll'

const Footer = ({ toggle }) => {
  
	const toggleHome = () => {
	  scroll.scrollToTop();
	}

	return (
		<Section padding="2rem 0 0rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to='/' onClick={toggleHome}>
							<FooterIcon><GiStarSattelites /></FooterIcon>
							<FooterTextLogo>Horoscope</FooterTextLogo>
						</FooterLogo>
						<FooterAddress>
							 Minsk, Gikalo Street 9, Building 4 BSUIR
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href={social.link}
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>Horoscope © 2022</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
