import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestComicById } from "../services/services";
import NavBar from "../components/NavBar"
import Recommended from "../components/Recommended";
import Details from "../components/Details";

const Comic = () => {
	const [comicDetails, setComicsDetails] = useState({});

	const { id } = useParams();

	const getComicById = async() => {
		const data = await requestComicById(id);
		setComicsDetails(data);
	}

	const { title } = comicDetails[0] || {};

 	useEffect(() => {
		getComicById();
	}, [id]);

	return (
		<div className="flex flex-col">
			<NavBar/>
			<Details {...comicDetails[0]}/>
			<Recommended title={title}/>
		</div>
	);
}

export default Comic