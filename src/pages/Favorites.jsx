import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import NavBar from "../components/NavBar";
import NoFavorites from "../components/NoFavorites";
import FavoritesContainer from "../components/FavoritesContainer";

const Favorites = () => {
	const { favorites } = useContext(FavoritesContext);
	
	return (
		<div className="bg-neutral-800 text-white">
			<NavBar/>
			{
				favorites.length === 0
				? <NoFavorites/>
				: <FavoritesContainer/>
			}
		</div>
	);
}

export default Favorites