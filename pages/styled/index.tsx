import * as React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

export const BannerContent = styled.div`
	width: 100%;
	height: 100%;
	padding: 30px 0 0 0;
	display: flex;
	justify-content: center;
	position: relative;
	z-index: 3;

	svg {
		width: 250px;

		.groove-g,
		.groove-r,
		.groove-o-1,
		.groove-o-2,
		.groove-v,
		.groove-e,
		.juice-j,
		.juice-u,
		.juice-i,
		.juice-c,
		.juice-e {
			stroke-width: 10;
			fill: transparent;
		}

		.swing-s,
		.swing-w,
		.swing-i,
		.swing-i-dot,
		.swing-ng {
			fill: ${({ theme }) => theme.colors.accent};
		}
	}
`;

export const Main = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export const MainBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
	/* background-image: url("/charleston.jpg"); */
	background-color: ${({ theme }) => theme.colors.background};

	background-repeat: no-repeat;
	background-image: url("/main_background.jpg");
	background-blend-mode: luminosity;
	background-size: cover;
	background-position: center 10%;
`;

export const MainBackgroundOverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 2;
	/* background-image: url("/charleston.jpg"); */
	background-color: ${({ theme }) => theme.colors.overlay};
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Nav = styled.nav`
	padding: 0 2rem;
	position: absolute;
	left: 0;
	top: 0;
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const NavLink = styled.a`
	height: 100%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
	font-size: 1.5rem;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.secondary};
	list-style-type: none;
	flex-basis: .8rem;
	text-decoration: none;
`;

export const GrooveNavLogo = styled.li`
	--width: 100px;
	padding-right: 50px;

	width: var(--width);

	svg {
		width: var(--width);
	}

	.groove-g,
	.groove-r,
	.groove-o-1,
	.groove-o-2,
	.groove-v,
	.groove-e {
		stroke-width: 10px;
	}

	.swing-s,
	.swing-w,
	.swing-i,
	.swing-i-dot,
	.swing-ng {
		fill: ${({ theme }) => theme.colors.accent};
	}

	list-style-type: none;
`;
