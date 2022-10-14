import { useState, useEffect } from "react";
import { requestComics } from "../services/services";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

const Home = () => {
	const [comics, setComics] = useState([]);
	const [limit, setLimit] = useState(15);
	const [loading, setLoading] = useState(true);

	const getComics = async() => {
		const data = await requestComics();
		setComics(data);
		setLoading(false);
	}
	
	const loadMore = () => {
		setLimit(limit + 15);
	}

	useEffect(() => {
		getComics();
	}, []);

	return (
		<div className="text-black">
			<NavBar/>
			<div className="grid grid-cols-5 gap-4 p-8 z-20">
				{
					comics.slice(0, limit).map(comic => (
						<Card
							key={comic.id}
							{...comic}
						/>
					))
				}
			</div>
			{
				limit < comics.length
				&&
				<div className="flex justify-center w-full">
					<button
						className="bg-red-600 m-4 px-4 py-2 text-white"
						onClick={loadMore}
					>Load more</button>
				</div>
			}
		</div>
	);
}

export default Home