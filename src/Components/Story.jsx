import { useState } from "react";

const Story = ({ pages }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [isTurningPage, setIsTurningPage] = useState(false);

	const nextPage = () => {
		if (currentPage < pages.length - 1) {
			setIsTurningPage(true);
			setTimeout(() => {
				setCurrentPage((prevPage) => prevPage + 1);
				setIsTurningPage(false);
			}, 500); // Adjust the transition duration as needed
		}
	};

	const prevPage = () => {
		if (currentPage > 0) {
			setIsTurningPage(true);
			setTimeout(() => {
				setCurrentPage((prevPage) => prevPage - 1);
				setIsTurningPage(false);
			}, 500); // Adjust the transition duration as needed
		}
	};

	return (
		<div
			className={`story-container ${
				isTurningPage ? "turning" : ""
			} py-32 mx-12 md:mx-32`}
		>
			<div className="story-content flex gap-12">
				<div className="left-page" onClick={prevPage}>
					<p className="text-2xl font-normal ">{pages[currentPage].text}</p>
				</div>
				<div className="right-page" onClick={nextPage}>
					<img
						className="rounded-xl  w-[400px] md:w-[500px]"
						src={pages[currentPage].image}
						alt={`Page ${currentPage + 1}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Story;
