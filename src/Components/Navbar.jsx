import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navbar() {
	const navToggle = useRef();
	const navigate = useNavigate();

	const navToggleHandler = () => {
		navToggle.current.classList.toggle("hidden");
	};

	return (
		<nav className=" absolute top-0 left-0 right-0 z-10 py-4 md:py-6 h-16 px-4  bg-white border-gray-200  shadow-lg">
			<div className="container mx-auto flex flex-wrap justify-between items-center">
				<Link
					className="flex items-center cursor-pointer"
					activeClass="active"
					to="#"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<span className="self-center text-2xl font-medium whitespace-nowrap ">
						Lawkey{" "}
					</span>{" "}
				</Link>
				<button
					onClick={navToggleHandler}
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						cursor
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-default"
					ref={navToggle}
				>
					<ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  0 shadow-md md:shadow-none">
						<li>
							<button
								className="transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100  bg-transparent rounded md:bg-transparent md:text-gray-700 md:p-0"
								onClick={() => {
									navigate("/games");
								}}
							>
								Games
							</button>
						</li>
						<li>
							{/* <Link
								className={
									" transition ease-linear duration-400 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100  rounded md:bg-transparent md:text-gray-700 md:p-0  md::text-gray-500"
								}
								activeClass="active"
								to="learn"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={navToggleHandler}
							>
								About
							</Link> */}
							<button
								className="transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100  bg-transparent rounded md:bg-transparent md:text-gray-700 md:p-0"
								onClick={() => {
									navigate("/about");
								}}
							>
								About
							</button>
						</li>
						<li>
							{/* <Link
								className=" transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100  rounded md:bg-transparent md:text-gray-700 md:p-0  "
								activeClass="active"
								to="connect"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={navToggleHandler}
							>
								Connect
							</Link> */}
							<button
								className="transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100  bg-transparent rounded md:bg-transparent md:text-gray-700 md:p-0"
								onClick={() => {
									navigate("/Modules");
								}}
							>
								Modules
							</button>
						</li>
						<li>
							{/* <Link
								className=" transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100  rounded md:bg-transparent md:text-gray-700 md:p-0 "
								activeClass="active"
								to="faq"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								onClick={navToggleHandler}
							>
								FAQ{" "}
							</Link> */}
							<button
								className="transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-gray-700 bg-gray-100  bg-transparent rounded md:bg-transparent md:text-gray-700 md:p-0"
								onClick={() => {
									navigate("/quiz");
								}}
							>
								Quiz
							</button>
						</li>
						<li>
							<button
								className="transition ease-linear duration-100 hover:bg-gray-200 md:hover:bg-inherit  md:hover:text-black   cursor-pointer block py-2 pl-3 pr-4 text-white  rounded bg-blue-300  md:text-white md:p-1"
								onClick={() => {
									navigate("/Modules");
								}}
							>
								SignUp
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
