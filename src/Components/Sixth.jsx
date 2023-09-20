function Sixth() {
	return (
		<div id="join" className="flex flex-col  mx-12 md:mx-32 my-36 ">
			<main className="flex flex-col gap-8 md:gap-24 mb-20 md:mb-24 ">
				<h1 className="text-5xl text-gray-800 font-Jua ">
					Ready to ascend the world of child rights knowledge?
				</h1>

				<div>
					<button className="bg-[#277da1] py-2 px-4  text-gray-100 text-xl rounded-md mb-12 mr-12">
						Join the Adventure
					</button>
					<button className="bg-[#f9844a] py-2 px-4 text-gray-100 text-xl rounded-md">
						Learn More{" "}
					</button>
				</div>
			</main>
			<aside className="">
				<h1 className="text-4xl text-gray-800 font-medium font-Jua mb-12">
					Your valuable feedback 😊
				</h1>
				<input
					type="text"
					placeholder="Your Feedback"
					className="rounded-lg border border-gray-700 p-3 mb-6 mr-6"
				/>
				<button
					type="submit"
					className="bg-[#277da1] py-2 px-4  text-gray-100 text-xl rounded-md mb-12 mr-12"
				>
					Submit
				</button>
			</aside>
		</div>
	);
}

export default Sixth;
