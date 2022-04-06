import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<VerticalStoryList>
					{SECONDARY_STORIES.map((story, index) => (
						<StoryWrapper key={story.id}>
							<SecondaryStory {...story} />
						</StoryWrapper>
					))}
				</VerticalStoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<StoryList>
					{OPINION_STORIES.map((story, index) => (
						<StoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</StoryWrapper>
					))}
				</StoryList>
			</OpinionSection>

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
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		grid-template-areas:
			"main-story secondary-stories"
			"advertisement advertisement"
			"opinion-stories opinion-stories";
		grid-template-columns: 2fr 1fr;
		gap: 16px 0;
	}
	@media ${QUERIES.laptopAndUp} {
		grid-template-areas:
			"main-story secondary-stories opinion-stories"
			"main-story advertisement advertisement";
		grid-template-columns: 5fr 4fr 3fr;
	}
`;

const MainStorySection = styled.section`
	grid-area: main-story;
	@media ${QUERIES.tabletAndUp} {
		padding-right: 16px;
		margin-right: 16px;
		border-right: 1px solid ${COLORS.gray[300]};
	}
`;

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;
	@media ${QUERIES.laptopAndUp} {
		padding-right: 16px;
		margin-right: 16px;
		border-right: 1px solid ${COLORS.gray[300]};
	}
`;

const VerticalStoryList = styled.div`
	display: flex;
	flex-direction: column;
`;

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
	@media ${QUERIES.tabletOnly} {
		/* display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: space-evenly;
		grid-gap: 32px; */
		flex-direction: row;
		gap: 16px;
	}
`;
const StoryWrapper = styled.div`
	&:not(:last-of-type) {
		padding-bottom: 20px;
		border-bottom: 1px solid ${COLORS.gray[300]};
		margin-bottom: 20px;
	}
	@media ${QUERIES.tabletOnly} {
		padding-bottom: 0px;
		border-bottom: none;
		margin-bottom: 0px;
		flex: 1;

		&:not(:last-of-type) {
			padding-bottom: revert;
			border-bottom: revert;
			margin-bottom: revert;
		}
	}
`;

const OpinionSection = styled.section`
	grid-area: opinion-stories;
	margin-top: -8px;
`;

const AdvertisementSection = styled.section`
	grid-area: advertisement;
	padding-top: 16px;
	border-top: 1px solid ${COLORS.gray[300]};
`;

export default MainStoryGrid;
