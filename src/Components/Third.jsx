import { useNavigate } from "react-router-dom";

function Third() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col md:flex-row  border border-gray-700 m-12 md:mx-32 justify-center items-center md:gap-12 md:my-44 rounded-xl md:py-8">
			<div className="  px-4 md:px-12 h-[496px] flex flex-col justify-center gap-12  order-1 ">
				<p className=" text-gray-800 text-left text-6xl md:text-8xl font-semibold font-Jua">
					Weekly Quiz
				</p>
				<buttonMargarine
					onClick={() => {
						navigate("quiz");
					}}
					type="button"
					className="w-64 justify-center  text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-lg px-3 py-3 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40  "
				>
					Head to Quiz
				</buttonMargarine>

				<p></p>
			</div>
			<div className=" p-4 rounded-2xl">
				<img
					src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
					alt="empower image"
					className="rounded-xl  object-contain   w-[400px]   lg:w-[500px] "
				/>
			</div>
		</div>
	);
}

export default Third;
