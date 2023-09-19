import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage></Homepage>}></Route>
			</Routes>
		</>
	);
}

export default App;
