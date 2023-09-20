import Story from "../Components/Story";
// import two from "../../public/images/two.jpg";
function Stories() {
	const story1 = [
		{
			text: "In a bustling school in New Delhi, Aarav sat quietly in the back of the room,an observer to the world around him.  He was a soft- spoken 13 - year - old,often lostinhis thoughts. ",

			image: "../../public/images/one.jpg",
		},
		{
			text: "There lived a brave knight named Sir Lancelot.",
			image: "../../public/images/two.jpg",
		},
		// Add more pages as needed
	];
	return (
		<div>
			<h1>Storybook</h1>

			<Story pages={story1} />
		</div>
	);
}

export default Stories;
