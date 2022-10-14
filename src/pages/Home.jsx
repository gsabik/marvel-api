import { useState, useEffect } from "react";
import { requestComics } from "../services/services";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import LoadMore from "../components/LoadMore";

const Home = () => {
	const [comics, setComics] = useState([]);
	const [loading, setLoading] = useState(true);

	const getComics = async() => {
		const data = await requestComics();
		setComics(data);
		setLoading(false);
	} 

	useEffect(() => {
		getComics();
	}, []);

	return (
		<div className="text-black">
			<NavBar/>
			<div className="grid grid-cols-5 gap-4 p-8 z-20">
				{
					comics.map(comic => (
						<Card
							key={comic.id}
							{...comic}
						/>
					))
				}
			</div>
			<div className="flex justify-center w-full">
				<LoadMore/>
			</div>
		</div>
	);
}

export default Home