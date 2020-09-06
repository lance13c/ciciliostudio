import styled from 'styled-components';
import Link from 'next/link';
import {
	Title,
	BannerContent,
	MainBackground,
	MainBackgroundOverlay,
	Main,
	Nav,
	NavLink,
	GrooveNavLogo
} from './styled';

import GrooveJuiceBannerLogo from './components/GrooveJuiceBannerLogo';

export default function Home() {
	return (
		<Main>
			<MainBackground />
			<MainBackgroundOverlay />
			{/* <Nav>
				<GrooveNavLogo>
					<ReactSVG src="/gjs_logo_web.svg" />
				</GrooveNavLogo>
				<Link href="/">
					<NavLink>Classes</NavLink>
				</Link>
				<Link href="/">
					<NavLink>Classes</NavLink>
				</Link>
				<Link href="/">
					<NavLink>Classes</NavLink>
				</Link>
				<Link href="/">
					<NavLink>Staff</NavLink>
				</Link>
			</Nav> */}
			<BannerContent>
				<GrooveJuiceBannerLogo />
			</BannerContent>
		</Main>
	);
}
