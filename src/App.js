import Header from "./components/Header";
import MainStoryGrid from "./components/MainStoryGrid";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import SpecialStoryGrid from "./components/SpeciaStoryGrid";
function App() {
	return (
		<>
			<Header />
			<MaxWidthWrapper as='main'>
				<MainStoryGrid />
				<SpecialStoryGrid />
			</MaxWidthWrapper>
		</>
	);
}

export default App;
