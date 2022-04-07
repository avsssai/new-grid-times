import React from "react";
import styled from "styled-components/macro";

const SectionTitle = ({ children, cornerLink }) => {
	return (
		<Wrapper>
			<Title>{children}</Title>
			{cornerLink && <CornerLink href='/more-stories'>{cornerLink}</CornerLink>}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Title = styled.h2`
	font-size: 24px;
`;
const CornerLink = styled.a`
	font-size: 12px;
	&:hover {
		text-decoration: underline;
	}
`;

export default SectionTitle;
