import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import AppRouter from "./router/AppRouter";

const MarvelApp = () => {
	return (
		<FavoritesProvider>
			<BrowserRouter>
				<AppRouter/>
			</BrowserRouter>
		</FavoritesProvider>
	);
}

export default MarvelApp