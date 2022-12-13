import { 
	createContext, 
	useEffect, 
	useState 
} from "react";

export const FavoritesContext = createContext([]);

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	const addFavorite = (favorite) => {
		setFavorites([...favorites, favorite]);
	}

	const deleteFavorite = (id) => {
		return setFavorites(favorites.filter(favorite => favorite.id !== id));
	}

	return (
		<FavoritesContext.Provider value={{
			favorites, 
			addToFavorites: addFavorite,
			deleteFavorite
		}}>
			{children}
		</FavoritesContext.Provider>
	);
}