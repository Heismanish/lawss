import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Modules from "./Pages/Modules";
import About from "./Pages/About";
import Quiz from "./Pages/Quiz";
// import Games from "./Pages/Games";
import Stories from "./Pages/Stories";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
				<Route path="/modules" element={<Modules />}></Route>
				<Route path="/modules/:module1" element={<Stories />}></Route>
				<Route path="/contactus" element={<About />}></Route>
				<Route path="/quiz" element={<Quiz />}></Route>
			</Routes>
		</>
	);
}

export default App;
