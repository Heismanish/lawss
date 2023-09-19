import welcome from "../../public/cole-welcome.png";
import Footer from "../Components/Footer";

function Modules() {
	return (
		<>
			<div className=" mx-12 md:mx-32  ">
				{/* First section */}
				<div className="min-h-screen flex flex-col justify-around items-center  md:flex-row gap-6 md:gap-12 py-32 md:py-0  ">
					<img
						className="w-full  max-w-2xl order-1 lg:max-w-3xl  rounded-md"
						src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
						alt="modules homepage"
					/>
					<main>
						<h1 className="text-6xl font-semibold md:mb-4 mb-2 text-[#023e8a]">
							RightsLand
						</h1>
						<p className="text-6xl font-normal">Adventure</p>
					</main>
				</div>
				{/* Second Section */}
				<div className=" flex flex-col md:flex-row justify-evenly items-center mx-auto my-12 md:my-32 ">
					<main>
						<h1 className="text-[#03045e] text-center md:text-left font-semibold text-6xl md:text-6xl  md:mb-12 mb-8">
							Welcome Explorers!
						</h1>
						<p className="text-gray-900 text-xl text-center md:text-left  md:w-2/3 mb-8">
							Embark on a thrilling journey through RightsLand, where you’ll
							dive into the magical world of Children’s Rights. Learn and
							champion your rights through lively scenarios tailor-made just for
							you. Ready to unravel your mystical powers?
						</p>
					</main>
					<img className="max-w-2xl w-full" src={welcome} alt="welcome image" />
				</div>

				{/* Third Section */}
				<div id="welcome" className=" md:gap-12  md:py-16 py-12  ">
					<h1 className="text-[#03045e] text-5xl font-semibold text-left mb-12 md:mb-20">
						Modules Awaiting Unveiling
					</h1>
					<main className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-24">
						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								Education Enigma
							</h2>
							<p className="text-[#023e8a]">
								Discover your right to learn in captivating real-life settings.
							</p>
						</div>

						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								Education Enigma
							</h2>
							<p className="text-[#023e8a]">
								Discover your right to learn in captivating real-life settings.
							</p>
						</div>

						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								Education Enigma
							</h2>
							<p className="text-[#023e8a]">
								Discover your right to learn in captivating real-life settings.
							</p>
						</div>
						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								Education Enigma
							</h2>
							<p className="text-[#023e8a]">
								Discover your right to learn in captivating real-life settings.
							</p>
						</div>

						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								Education Enigma
							</h2>
							<p className="text-[#023e8a]">
								Discover your right to learn in captivating real-life settings.
							</p>
						</div>
						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								Education Enigma
							</h2>
							<p className="text-[#023e8a]">
								Discover your right to learn in captivating real-life settings.
							</p>
						</div>
					</main>
				</div>

				{/* Fourth Section */}
				<div className=" flex flex-col md:flex-row justify-start items-center mx-auto my-12 md:my-32 ">
					<main>
						<h1 className="text-black    md:text-left font-semibold text-3xl md:text-4xl max-w-5xl md:mb-12 mb-8">
							The adventure of a lifetime awaits. Are you ready to embark on
							this magical journey? Join RightsLand now!{" "}
						</h1>
						<button className="rounded-3xl bg-black text-[#ff9100] px-6 py-3 mr-8">
							Start Your Adventure
						</button>
						<button className="rounded-3xl bg-[#0096c7] text-gray-100 px-6 py-3">
							Discover More
						</button>
					</main>
				</div>

				{/* Fifith Section */}
				<div>
					<h1 className="text-4xl text-[#023e8a] font-semibold">
						World of Wonders
					</h1>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-12">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>

				{/* Sixth Section */}
				<div className="md:py-16 py-12">
					<h1 className="text-4xl font-semibold text-[#03045e] mb-12">
						Wizard’s Wisdom
					</h1>
					<main className="flex flex-col md:flex-row gap-8">
						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								What age group is RightsLand for?
							</h2>
							<p className="text-[#023e8a]">
								RightsLand is designed for curious younglings aged 6-12, but
								wizards of all ages are welcome to join!
							</p>
						</div>
						<div>
							<h2 className="text-[#03045e]  text-2xl font-medium mb-6 ">
								Can I choose my own adventure path?
							</h2>
							<p className="text-[#023e8a] max-w-3xl">
								Absolutely! You’re free to craft your own personalized adventure
								path, selecting the rights modules you wish to explore.
							</p>
						</div>
					</main>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}

export default Modules;
