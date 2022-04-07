import React from "react";
import styled from "styled-components/macro";
const Advertisement = () => {
	return (
		<Wrapper>
			<Header>Advertisement</Header>
			<Container></Container>
		</Wrapper>
	);
};
const Wrapper = styled.div``;
const Header = styled.div`
	text-align: center;
	font-size: 1rem;
	font-style: italic;
	margin-bottom: 8px;
	&::before,
	&::after {
		content: "—";
		margin: 0 8px;
	}
`;
const Container = styled.div`
	height: 382px;
	background: var(--color-gray-300);
`;

export default Advertisement;
