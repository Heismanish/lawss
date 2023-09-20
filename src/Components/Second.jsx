import second from "../../public/second.avif";
import { useNavigate } from "react-router-dom";
function Second() {
	const navigate = useNavigate();
	return (
		<div className="mx-12 md:mx-32">
			<div
				id="games"
				className="flex flex-col md:flex-row justify-around items-center my-16 md:my-44 gap-12 md:gap-4"
			>
				<main className="flex flex-col gap-16 max-w-xl ">
					<div>
						<h1 className="font-Jua text-7xl text-gray-900 mb-8">Empower</h1>
						<p className="text-gray-700  text-xl">
							Introducing the ultimate gamified platform for children aged 8 to
							16 in India. Children will learn about their rights, inclusivity,
							and accessibility through interactive and engaging gameplay.
						</p>
					</div>
					<button
						onClick={() => {
							navigate("/games");
						}}
						className="items-start bg-[#277da1] py-2 rounded-lg text-gray-100 text-2xl"
					>
						Join the game
					</button>
				</main>

				<img
					src={second}
					alt="empower image"
					className="rounded-2xl object-contain w-[500px] lg:w-[600px] "
				/>
			</div>
			<div
				id="learn"
				className="flex flex-col md:flex-row justify-around items-center my-12 md:my-44 gap-12 md:gap-4"
			>
				<main className="flex flex-col gap-16 max-w-xl md:order-2">
					<div>
						<h1 className="font-Jua text-3xl text-[#277da1] mb-8">
							Real-life scenarios and modular learning paths
						</h1>
						<p className="text-[#277da1] text-xl">
							Discover an engaging learning experience where children dive
							head-first into real-life challenges, acquire legal literacy, and
							empower themselves.
						</p>
					</div>
					<button
						onClick={() => {
							navigate("/modules");
						}}
						className="items-start bg-[#f8961e] uppercase  py-2 rounded-lg text-gray-900 text-2xl font-light"
					>
						Start Learning{" "}
					</button>
				</main>

				<img
					src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
					alt="empower image"
					className="rounded-2xl object-contain w-[500px] lg:w-[600px] "
				/>
			</div>
			<div
				id="connect"
				className="flex flex-col md:flex-row justify-around items-center md:12 md:my-44  gap-12 md:gap-4"
			>
				<main className="flex flex-col gap-16 max-w-xl ">
					<div>
						<h1 className="font-Jua text-3xl text-[#277da1] mb-8">
							Social connectivity and child rights organizations
						</h1>
						<p className="text-[#277da1] text-xl">
							Connect with child rights organizations, collaborate, and engage
							with like-minded children on the path to social justice.
						</p>
					</div>
					<button
						onClick={() => {
							navigate("/contactus");
						}}
						className="items-start bg-[#f8961e] uppercase py-2 rounded-lg text-gray-900 text-2xl font-light"
					>
						Connect{" "}
					</button>
				</main>

				<img
					src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
					alt="empower image"
					className="rounded-2xl object-contain w-[500px] lg:w-[600px] "
				/>
			</div>
		</div>
	);
}

export default Second;
