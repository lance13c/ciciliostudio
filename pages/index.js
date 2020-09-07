import styled from 'styled-components';
import Link from 'next/link';
import {
	Title,
	BannerContent,
	MainBackground,
	MainBackgroundOverlay,
	Main,
	MainSection,
	Nav,
	NavLink,
	GrooveNavLogo,
	TransitionOverlay,
	ContentSection
} from './styled';

import GrooveJuiceBannerLogo from './components/GrooveJuiceBannerLogo';

export default function Home() {
	return (
		<Main>
			<MainSection>
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
				<TransitionOverlay />
			</MainSection>
			<ContentSection />
		</Main>
	);
}
