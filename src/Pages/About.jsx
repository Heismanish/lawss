import Footer from "../Components/Footer";

function About() {
	return (
		<>
			{/* First Section */}
			<div className="bg-[#FEE440] ">
				<div className="mx-12 md:mx-32 min-h-screen py-32 flex flex-col gap-12 justify-center items-start">
					<h1 className="text-7xl font-semibold uppercase">Justice.</h1>
					<p className="text-xl max-w-2xl mb-2">
						Enter a world where children’s rights are always protected. Our team
						of dedicated child law experts is here to provide legal advice and
						connect kids to National Commission for Protection of Child Rights
						(NCPCR) resources. Unleash the power of child-friendly justice!
					</p>
					<button className="text-xl px-4 py-2 bg-[#00BBF9] rounded-lg text-gray-100 font-semibold">
						Connect with us{" "}
					</button>
				</div>
			</div>
			{/* 2nd Section */}
			<div>
				<div className="mx-12 md:mx-32  md:py-32 py-12  flex md:flex-row flex-col gap-12 justify-around items-start">
					<h1 className="text-4xl  font-bold uppercase text-[#00BBF9]">
						Legal aid for kiddos
					</h1>
					<p className="text-lg font-medium text-[#00BBF9] max-w-md mb-2">
						At Children’s Legal Aid, our mission is to create a safe space where
						children can seek guidance from top-tier law professionals. We offer
						expert advice, tailored to the unique needs of every child and their
						situation.
					</p>
				</div>
			</div>
			{/* 3rd Section */}
			<div className="bg-[#00BBF9]  ">
				<div className="mx-12 md:mx-32  py-32 flex flex-col gap-16 md:gap-32 justify-around items-start">
					<div>
						<h1 className="text-4xl font-semibold uppercase text-gray-900 mb-8 md:mb-12">
							NCPCR Resources On Tap
						</h1>
						<main className="flex md:flex-row flex-col md:gap-16 gap-12 text-gray-800">
							<p className="text-xl max-w-xl mb-2">
								Learn about NCPCR’s services and rights protection mechanisms
								for children. Explore a vast library of resources, designed to
								empower and defend our young citizens’ rights.
							</p>
							<p className="text-xl max-w-xl mb-2">
								Learn about NCPCR’s services and rights protection mechanisms
								for children. Explore a vast library of resources, designed to
								empower and defend our young citizens’ rights.
							</p>
						</main>
					</div>
					<div className="flex flex-col gap-12">
						<h1 className="text-5xl font-semibold">
							Ready to be a child rights superhero? <br></br>Join us!
						</h1>
						<div className="flex gap-4 ">
							<button className="rounded-xl bg-[#FEE440] px-4 py-2">
								Connect to NCPCR
							</button>
							<button className="rounded-xl bg-gray-100 px-4 py-2">
								Visit NCPCR
							</button>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		</>
	);
}

export default About;
