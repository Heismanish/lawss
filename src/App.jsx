import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Modules from "./Pages/Modules";
import About from "./Pages/About";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
				<Route path="/modules" element={<Modules />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
		</>
	);
}

export default App;
