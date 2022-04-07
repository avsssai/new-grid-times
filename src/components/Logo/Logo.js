import format from "date-fns/format";
import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const Logo = () => {
	return (
		<Wrapper>
			<Link href='/'>
				<Name>New York Times</Name>
			</Link>
			<TodaysDate>{format(new Date(), "EEEE, MMMM io, yyyy")}</TodaysDate>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	text-align: center;
`;
const Name = styled.h2`
	font-family: var(--font-family-logo);
	font-size: 3rem;

	@media ${QUERIES.tabletAndUp} {
		font-size: 4rem;
	}
`;
const Link = styled.a`
	text-decoration: none;
`;
const TodaysDate = styled.div`
	font-size: ${18 / 16}rem;
`;
export default Logo;
