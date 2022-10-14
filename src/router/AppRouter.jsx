import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ComicDetail from "../pages/ComicDetail";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/comic/:id" element={<ComicDetail/>}/>
		</Routes>
	);
}

export default AppRouter