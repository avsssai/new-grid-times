import React from "react";
import { FaSearch, FaBars, FaUserAlt } from "react-icons/fa";
import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";
import { COLORS, QUERIES } from "../../constants";

const Header = () => {
	return (
		<HeaderWrapper>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<FaSearch size={24} opacity={0.7} />
						</button>
						<button>
							<FaBars size={24} opacity={0.7} />
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<FaUserAlt size={24} opacity={0.7} />
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<DesktopActionGroup>
					<button>
						<FaSearch size={24} opacity={0.7} />
					</button>
					<button>
						<FaBars size={24} opacity={0.7} />
					</button>
				</DesktopActionGroup>
				<Logo />
				<SubscribeButtonWrapper>
					<Button>Subscribe</Button>
					<Link href='/'>Already a Subscriber?</Link>
				</SubscribeButtonWrapper>
			</MainHeader>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header``;
const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const SuperHeader = styled.div`
	background: ${COLORS.offblack};
	padding: 1rem 0;
	color: white;
	@media ${QUERIES.laptopAndUp} {
		display: none;
	}
`;
const MainHeader = styled(MaxWidthWrapper)`
	margin-top: 2rem;
	@media ${QUERIES.tabletAndUp} {
		margin-top: 3rem;
	}
	@media ${QUERIES.laptopAndUp} {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		justify-content: start;
	}
`;

const DesktopActionGroup = styled.div`
	display: none;
	position: relative;
	@media ${QUERIES.laptopAndUp} {
		display: flex;
		gap: 2rem;
	}
`;
const ActionGroup = styled.div`
	display: flex;
	gap: 2rem;
	svg {
		display: block;
	}
`;
const Link = styled.a`
	font-size: ${14 / 16}rem;
	position: absolute;
	text-align: center;
	width: 100%;
	margin-top: 8px;
`;
const SubscribeButtonWrapper = styled.div`
	display: none;
	position: relative;
	justify-self: end;
	@media ${QUERIES.laptopAndUp} {
		display: revert;
	}
`;

export default Header;
