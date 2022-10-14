import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const MarvelApp = () => {
	return (
		<BrowserRouter>
			<AppRouter/>
		</BrowserRouter>
	);
}

export default MarvelApp