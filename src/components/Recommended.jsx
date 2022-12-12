import { useEffect, useState } from "react";
import { requestRecommended } from "../services/services";
import Card from "./Card";

const Recommended = ({ title, id }) => {
	const [recommended, setRecommended] = useState([]);

	const newTitle = title?.slice(0, 5);

	const getRecommended = async() => {
		const data = await requestRecommended(newTitle);
		setRecommended(data);
	}

	useEffect(() => {
		if (!!newTitle) {
			getRecommended();
		}
	}, [title]);

	return (
		<div className="flex flex-col text-black max-w-screen-xl mx-auto my-4 p-4">
			<h3 className="font-semibold p-10 text-2xl">Recommended</h3>
			<div className="grid grid-cols-3 gap-4 px-10">
				{
					recommended.map(comic => (
						<Card
							key={comic.id}
							{...comic}
						/>
					))
				}
			</div>
		</div>
	);
}

export default Recommended