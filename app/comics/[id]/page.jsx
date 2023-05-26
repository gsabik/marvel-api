import { getComicsById } from "@/pages/api/api";

import ComicDetails from "@/app/components/ComicDetails";
import Recommended from "@/app/components/Recommended";

const ComicPage = async({ params }) => {
	const { id } = params;
	const comicDetails = await getComicsById(id);
	const { title } = comicDetails[0] || {};

	return (
		<div>
			<ComicDetails {...comicDetails[0]}/>
			<Recommended title={title}/>
		</div>
	);
}

export default ComicPage;