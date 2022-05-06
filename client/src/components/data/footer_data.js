import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
        link: 'https://www.facebook.com/bsuir.international/',

	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
        link: 'https://www.instagram.com/bsuir_official/?hl=ru',

	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
        link: 'https://www.youtube.com/user/ksisportal',

	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
        link: 'https://twitter.com/',

	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
        link: 'https://www.linkedin.com/',

	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
