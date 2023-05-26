import { getComics } from "@/pages/api/api";
import ListOfComics from "../components/ListOfComics";

const ComicsPage = async() => {
	const comics = await getComics();

	return (
		<div className="max-w-screen-xl mx-auto">
			<ListOfComics comics={comics}/>
		</div>
	);
}

export default ComicsPage;