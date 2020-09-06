import * as React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import GrooveJuiceText from '../GrooveJuiceText';

export interface GrooveJuiceBannerLogoProps {}

const ContentContainer = styled.div`
	display: flex;
	position: relative;
`;

const GrooveJuiceBannerLogo: React.SFC<GrooveJuiceBannerLogoProps> = () => {
	return (
		<ContentContainer>
			<GrooveJuiceText />
			<ReactSVG src="/gjs_logo_web.svg" />
		</ContentContainer>
	);
};

export default GrooveJuiceBannerLogo;
