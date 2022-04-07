import React from "react";
import styled from "styled-components/macro";

const SecondaryStory = ({ id, title, image, abstract }) => {
	const { src, alt } = image;
	return (
		<Wrapper>
			<Image src={src} alt={alt} />

			<Title>{title}</Title>
			<Abstract>{abstract}</Abstract>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: grid;
	grid-template-areas:
		"image title"
		"image abstract";
	gap: 16px;
	grid-template-columns: 120px 1fr;
	align-content: start;
	justify-content: start;
`;
const Image = styled.img`
	grid-area: image;
	width: 100%;
	object-fit: cover;
	height: 120px;
`;

const Title = styled.h2`
	grid-area: title;
	font-size: ${18 / 16}rem;
	margin-top: -8px;
`;
const Abstract = styled.div`
	grid-area: abstract;
`;

export default SecondaryStory;
