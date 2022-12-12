import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Comic from "../pages/Comic";
import Favorites from "../pages/Favorites";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/comic/:id" element={<Comic/>}/>
			<Route path="/favorites" element={<Favorites/>}/>
		</Routes>
	);
}

export default AppRouter