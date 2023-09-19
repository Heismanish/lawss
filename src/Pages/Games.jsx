import { useNavigate } from "react-router-dom";
import game from "../../public/game.jpg";
import Footer from "../Components/Footer";

function Games() {
	const navigate = useNavigate();
	const value = [
		{
			key: 1,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
		{
			key: 2,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
		{
			key: 3,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
		{
			key: 4,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
		{
			key: 5,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
		{
			key: 6,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
		{
			key: 7,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
		{
			key: 8,
			title: "Right To Education",
			description:
				"Navigate school situations to ensure every child’s right to education is met.",
		},
	];
	return (
		<>
			<div className="bg-[#1C7293]">
				<header className="flex flex-col  lg:flex-row gap-12 text-white justify-around items-center mx-12 md:mx-32 py-24">
					<h1 className="text-[120px] uppercase font-bold  ">Play</h1>
					<p className="text-xl max-w-lg md:text-left text-center">
						Welcome to the world of child rights games! Get ready to explore,
						learn and have fun while you discover the rights every child has
						through captivating gameplay.
					</p>
				</header>
			</div>
			<div className="">
				<div className="flex justify-center items-center ">
					<img
						className="grayscale max-w-[1200px] w-full  rounded-b-3xl  h-auto"
						src={game}
						alt="team sports "
					/>
				</div>
			</div>
			<div className=" py-12 mx-12 md:mx-32">
				<h1 className="text-left md:text-center text-6xl font-semibold mb-16">
					Meet the Games
				</h1>
				<main className="grid lg:grid-cols-3 md:grid-cols-2  gap-12 ">
					{value.map((val) => {
						return (
							<div key={val.key} className="max-w-md flex flex-col gap-2">
								<h1 className="text-xl font-medium">{val.title}</h1>
								<p className="text-base text-[#065A82]">{val.description}</p>
								<button
									className="transition ease-linear duration-100   hover:bg-blue-500   cursor-pointer block px-4 py-2 text-white  rounded bg-blue-400  "
									onClick={() => {
										navigate("/");
									}}
								>
									Play
								</button>
							</div>
						);
					})}
				</main>
			</div>
			<Footer></Footer>
		</>
	);
}

export default Games;
