import React from "react";
import styled from "styled-components/macro";
const OpinionStory = ({ id, author, avatar, title }) => {
	return (
		<Wrapper>
			<Avatar src={avatar} />
			<Author>{author}</Author>
			<a href='/'>
				<Title>{title}</Title>
			</a>
		</Wrapper>
	);
};

const Wrapper = styled.article``;
const Avatar = styled.img`
	height: 48px;
	width: 48px;
	object-fit: cover;
	border-radius: 10000px;
`;
const Author = styled.h5`
	font-size: ${18 / 16}rem;
	color: var(--color-gray-700);
`;
const Title = styled.h4`
	font-size: ${18 / 16}rem;
	color: var(--color-gray-900);
`;
export default OpinionStory;
