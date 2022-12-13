import { useState, useEffect } from "react";
import { requestComics } from "../services/services";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Wallpaper from "../assets/Wallpaper.jpg"
import Input from "../components/Input";

const Home = () => {
	const [comics, setComics] = useState([]);
	const [search, setSearch] = useState("");
	const [limit, setLimit] = useState(20);
	const [loading, setLoading] = useState(true);

	const getComics = async() => {
		const data = await requestComics(search);
		setComics(data);
		setLoading(false);
	}
	
	const loadMore = () => {
		setLimit(limit + 20);
	}

	useEffect(() => {
		getComics();
	}, [search]);

	return (
		<div className="text-black">
			<NavBar/>
			<div
				className="h-screen"
				style={{
					backgroundImage: `url(${Wallpaper})`,
					boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, .5)",
					backgroundPosition: "fixed"
				}}
			>
			</div>
			<div className="flex flex-col max-w-screen-xl mx-auto">
				<Input setSearch={setSearch}/>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
					{
						comics.slice(0, limit).map(comic => (
							<Card
								key={comic.id}
								{...comic}
							/>
						))
					}
				</div>
			</div>
			{
				limit < comics.length
				&&
				<div className="flex justify-center w-full">
					<button
						className="bg-red-600 m-4 px-4 py-2 text-white hover:bg-red-700"
						onClick={loadMore}
					>Load more</button>
				</div>
			}
		</div>
	);
}

export default Home