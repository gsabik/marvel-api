import { getRecommended } from "@/pages/api/api";
import Card from "./Card";

const Recommended = async({ title }) => {
	const reccomended = await getRecommended(title);

	return (
		<div className="flex-col max-w-screen-xl mx-auto py-10">
			<h2 className="font-semibold text-2xl">Recommended</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
				{
					reccomended.map(comic => <Card key={comic.id} {...comic}/>)
				}
			</div>
		</div>
	);
}

export default Recommended;