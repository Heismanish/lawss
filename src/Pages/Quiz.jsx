import Footer from "../Components/Footer";
function Quiz() {
	return (
		<>
			{/* Sectoin1
			 */}

			<div className="min-h-screen mx-12 md:mx-32 py-32  flex flex-col justify-center items-start gap-24">
				<h1 className=" w-full  max-w-full   text-[#031926] text-[120px] sm:text-[256px] md:text-[320px] uppercase  text-center">
					{" "}
					QUIZ
				</h1>
				<p className="text-xl  text-center text-gray-800">
					" Get ready for the ultimate Children’s Rights Quiz showdown! Compete
					alongside your friends and classmates in a fun, interactive
					multiplayer extravaganza that tests your knowledge of the essential
					rights every child deserves. Prepare to be challenged and entertained
					– let the games begin!"
				</p>
			</div>

			{/* Section 2 */}
			<div className="mx-12 md:mx-32 mb-32 flex flex-col justify-center items-center gap-8">
				<div className="relative">
					<img
						className="grayscale opacity-90 rounded-3xl lg:max-w-4xl"
						src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
						alt="quiz pic"
					/>
					<div className="absolute inset-0 flex justify-center items-center">
						<h1 className="font-medium text-white sm:text-xl md:text-3xl lg:text-5xl z-10">
							"Master the rights knowledge"
						</h1>
					</div>
				</div>
				<a
					href="#"
					className="max-w-4xl w-full flex justify-between items-center bg-black px-4 py-2 text-gray-100 text-2xl rounded-2xl border border-transparent hover:bg-white hover:border-gray-900 hover:text-gray-900 transition-all duration-300 ease-in-out"
				>
					Start Quiz{" "}
					<svg
						className="inline w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</a>
				<a
					href="#"
					className="max-w-4xl w-full flex justify-between items-center border border-gray-900 px-4 py-2 text-gray-800 text-2xl rounded-2xl bg-white hover:bg-black hover:text-gray-100 transition-all duration-300 ease-in-out"
				>
					View Leaderboard{" "}
					<svg
						className="inline w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</a>
			</div>

			<Footer></Footer>
		</>
	);
}

export default Quiz;
