import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestComicById } from "../services/services";
import NavBar from "../components/NavBar"

const ComicDetail = () => {
	const [comicDetails, setComicsDetails] = useState({});

	const { id } = useParams();

	const getComicById = async() => {
		const data = await requestComicById(id);
		setComicsDetails(data);
	}

	const { 
		title,
		img, 
		description,
		creator,
		purchase,
		printPrice,
		digitalPrice, 
	} = comicDetails[0] || {};

 	useEffect(() => {
		getComicById();
	}, [id]);

	return (
		<div>
			<NavBar/>
			<div 
				className="fixed flex grayscale h-screen justify-center w-full z-10"
				style={{
					backgroundImage: `url(${img})`,
					boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, .8)",
				}}
			>
			</div>
			<div className="flex justify-center w-full z-20">
				<div className="fixed flex flex-row max-w-screen-xl mx-auto p-10 w-full z-20">
					<div className="align-middle flex w-2/5">
						<img
							alt={title}
							src={img}
							className="h-auto"
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default ComicDetail