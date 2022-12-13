import { 
	createContext, 
	useEffect, 
	useState 
} from "react";

export const FavoritesContext = createContext([]);

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	const addFavorite = (comic) => {
		setFavorites([...favorites, comic]);
	}

	const isInFavorites = (id) => {
		return favorites.some(comic =>  comic.id === id);
	}

	const deleteFavorite = (id) => {
		return setFavorites(favorites.filter(comic => comic.id !== id));
	}

	return (
		<FavoritesContext.Provider value={{
			favorites, 
			addFavorite,
			isInFavorites,
			deleteFavorite
		}}>{children}
		</FavoritesContext.Provider>
	);
}