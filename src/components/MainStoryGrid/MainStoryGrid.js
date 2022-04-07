import React from "react";
import styled from "styled-components/macro";
import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>
			<SecondaryStorySection>
				{SECONDARY_STORIES.map((story) => (
					<SecondaryStory {...story} key={story.id} />
				))}
			</SecondaryStorySection>
			<OpinionStorySection>
				<OpinionHeader>Opinion</OpinionHeader>
				{OPINION_STORIES.map((story) => (
					<>
						<OpinionStory key={story.id} {...story} />
					</>
				))}
			</OpinionStorySection>
			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		"main-story"
		"secondary-stories"
		"opinion-stories"
		"advertisement";

	grid-template-columns: 1fr;
`;
const MainStorySection = styled.div`
	grid-area: main-story;
`;
const SecondaryStorySection = styled.div`
	grid-area: secondary-stories;
`;
const OpinionStorySection = styled.div`
	grid-area: opinion-stories;
`;
const OpinionHeader = styled.h3`
	font-size: ${24 / 16}rem;
	margin-bottom: 1rem;
`;
const AdvertisementSection = styled.div`
	grid-area: advertisement;
`;
export default MainStoryGrid;
