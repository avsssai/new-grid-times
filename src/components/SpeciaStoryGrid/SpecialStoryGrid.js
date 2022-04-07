import React from "react";
import SectionTitle from "../SectionTitle";
import styled from "styled-components/macro";
import { MARKET_DATA } from "../../data";
import MarketDataCard from "../MarketDataCard";

const SpecialStoryGrid = () => {
	return (
		<Wrapper>
			<HeadingSection>
				<SectionTitle cornerLink='View Markets Data >>'>Markets</SectionTitle>
			</HeadingSection>
			<StoriesSection>
				<MarketCardsWrapper>
					{MARKET_DATA.map((item) => (
						<MarketDataCard key={item.tickerSymbol} {...item} />
					))}
				</MarketCardsWrapper>
			</StoriesSection>
		</Wrapper>
	);
};

const Wrapper = styled.div``;
const HeadingSection = styled.div``;
const StoriesSection = styled.div``;
const MarketCardsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
`;

export default SpecialStoryGrid;
