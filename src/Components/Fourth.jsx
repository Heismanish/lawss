function Fourth() {
	return (
		<div id="faq" className="my-44 mx-12 md:mx-32">
			<h1 className="font-Jua text-6xl mb-28 text-[#277da1] font-semibold  ">
				Get your question answered
			</h1>
			<main className="flex gap-32 flex-col md:flex-row items-center mb-24">
				<div className=" w-full flex flex-col justify-center gap-8  ">
					<h1 className="text-xl text-[#277da1] ">
						How does the platform work?
					</h1>
					<p className="text-gray-800 text-lg">
						The platform features interactive gameplay based on real-life
						scenarios that help children understand their rights, promote
						inclusivity, and focus on accessibility. It also encourages social
						connectivity and partnerships with child rights organizations.
					</p>
				</div>
				<div className=" w-full flex flex-col justify-center  gap-8">
					<h1 className="text-xl text-[#277da1]">
						How do I join the platform?
					</h1>
					<p>
						Click on the ‘Join the Game’ button and follow the instructions to
						create an account and start your journey.
					</p>
				</div>
			</main>
			<main className="flex gap-32 flex-col md:flex-row items-center mb-24">
				<div className=" w-full  flex flex-col justify-center  gap-8">
					<h1 className="text-xl text-[#277da1]">
						Is it suitable for all children?
					</h1>
					<p>
						Yes, our gamified platform is designed for children aged 8 to 16,
						with a focus on inclusivity and tailored learning paths.
					</p>
				</div>
				<div className=" w-full flex flex-col justify-center items-center gap-8 py-12 rounded-xl bg-[#277da1] ">
					{" "}
					<h1 className="text-3xl font-semibold font-Jua text-gray-200">
						Ask you question here
					</h1>
					<input
						type="text"
						placeholder="Enter you query..."
						className="w-4/5 p-2 border border-gray-200 rounded-lg "
					/>
					<button
						type="submit"
						className="p-2 bg-gray-100 text-gray-500 rounded-lg font-semibold "
					>
						{" "}
						Submit
					</button>
				</div>
			</main>
		</div>
	);
}

export default Fourth;
