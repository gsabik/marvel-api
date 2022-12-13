import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

const FavoritesContainer = () => {
	const { favorites, deleteFavorite } = useContext(FavoritesContext);

	return (
		<div className="grid grid-cols-5 gap-4 p-8">
			{
				favorites.map(({ id, title, img }) => (
					<div className="flex flex-col space-y-4" key={id}>
						<img
							src={img}
						/>
						<p className="font-semibold">{title}</p>
						<button className="bg-red-600 m-4 px-4 py-2 text-white hover:bg-red-700 w-fit" onClick={() => deleteFavorite(id)}>Delete</button>
					</div>
				))
			}
		</div>
	)
}

export default FavoritesContainer