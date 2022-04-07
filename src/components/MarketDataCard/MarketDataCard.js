import React from "react";
import styled from "styled-components/macro";

const MarketDataCard = ({ tickerSymbol, exchangeName, percentChange }) => {
	const images = {
		AAPL: "/images/stock-graph-down-1.svg",
		AMC: "/images/stock-graph-down-2.svg",
		ENB: "/images/stock-graph-up-1.svg",
		GOOG: "/images/stock-graph-down-3.svg",
		AMZN: "/images/stock-graph-down-2.svg",
		MSFT: "/images/stock-graph-down-3.svg",
	};
	return (
		<Wrapper>
			<Row>
				<Symbol>{tickerSymbol}</Symbol>
				<Chart src={images[tickerSymbol]} />
			</Row>
			<Row>
				<Exchange>{exchangeName}</Exchange>
				<Percent>{percentChange}</Percent>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: white;
	box-shadow: 2px 4px 12px 0px #0000001a;
	border-radius: 4px;
	padding: 16px;
`;
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 16px;
`;
const Symbol = styled.h2`
	font-size: ${24 / 16}rem;
`;
const Chart = styled.img`
	width: 100%;
	min-width: 32px;
	object-fit: cover;
`;
const Exchange = styled.div`
	font-size: ${14 / 16}rem;
`;
const Percent = styled.div``;
export default MarketDataCard;
