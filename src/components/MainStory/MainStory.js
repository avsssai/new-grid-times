import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const MainStory = ({ id, title, image, location, abstract, ...delegated }) => {
	const { src, alt } = image;
	return (
		<Wrapper {...delegated}>
			<a href={`/story/${id}`}>
				<Image src={src} alt={alt}></Image>
				<Title>{title}</Title>
			</a>
			<Abstract>
				<Location>{location}</Location> - {abstract}
			</Abstract>
			<ReadMore href='/story'>Continue Reading</ReadMore>
		</Wrapper>
	);
};

const Wrapper = styled.div``;
const Image = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
	margin-bottom: 1rem;
`;
const Title = styled.h3`
	font-size: ${24 / 16}rem;
	margin-bottom: 16px;
`;
const Abstract = styled.p`
	white-space: pre-wrap;
	margin-bottom: 1rem;
`;
const Location = styled.span`
	text-transform: uppercase;
`;
const ReadMore = styled.div`
	font-weight: ${WEIGHTS.medium};
	font-style: italic;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 1px;
	}
`;
export default MainStory;
