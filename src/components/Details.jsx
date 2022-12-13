import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Details = ({ id, title, description, purchase, img, creator, printPrice, digitalPrice }) => {
	const { addFavorite, isInFavorites } = useContext(FavoritesContext);

	const handleAddToFavorites = () => {
		if (!isInFavorites(id)) {
			const addComic = {
				id,
				img, 
				title
			}
			addFavorite(addComic);
		}
	}
	
	return (
		<div style={{
			backgroundImage: `url(${img})`,
			backgroundAttachment: "contain",
			backgroundPosition: "fixed",
			boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, .7	)"
		}}>
			<div className="flex justify-center w-full">
				<div className="flex flex-row h-full max-w-screen-xl mx-auto p-10 w-full">
					<div className="align-middle flex h-3/4 w-2/5">
						<img
							alt={title}
							src={img}
							className="h"
							/>
					</div>
					<div className="flex flex-col justify-start h-full p-10 space-y-4 w-3/5">
						<h2 className="text-4xl font-bold">{title}</h2>
						<p>{`Creator: ${creator}`}</p>
						<p>{description}</p>
						<div className="flex flex-row justify-between w-full">
							<p className="text-lg font-bold">
								Print price:<span className="font-normal text-md px-1">{printPrice === undefined || printPrice === 0 ? "not available" : `$${printPrice}`}</span>
							</p>
							<p className="text-lg font-bold">
								Digital price:<span className="font-normal text-md px-1">{digitalPrice === undefined || digitalPrice === 0 ? "not available" : `$${digitalPrice}`}</span>
							</p>
						</div>
						<a href={purchase}>{purchase}</a>
						<button className="bg-red-600 m-4 px-4 py-2 text-white hover:bg-red-700 w-fit" onClick={handleAddToFavorites}>Add to favorites</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details