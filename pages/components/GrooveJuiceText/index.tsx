import * as React from 'react';
import styled from 'styled-components';

export interface GrooveJuiceTextProps {}

const ContentContainer = styled.div`
	position: absolute;
	left: 6%;
	top: 12%;
`;

const TextContainer = styled.div`
	font-family: 'Oswald', sans-serif;
	display: flex;
	justify-content: flex-end;
	color: ${({ theme }) => theme.colors.text};
`;

const GrooveContainer = styled(TextContainer)``;

const JuiceContainer = styled(TextContainer)`
  margin: -5px 0 0 0;
`;

const GrooveJuiceText: React.SFC<GrooveJuiceTextProps> = () => {
	return (
		<ContentContainer>
			<GrooveContainer>
				<span>G</span>
				<span>R</span>
				<span>O</span>
				<span>O</span>
				<span>V</span>
				<span>E</span>
			</GrooveContainer>
			<JuiceContainer>
				<span>J</span>
				<span>U</span>
				<span>I</span>
				<span>C</span>
				<span>E</span>
			</JuiceContainer>
		</ContentContainer>
	);
};

export default GrooveJuiceText;
