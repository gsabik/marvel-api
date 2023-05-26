"use client";

import { useState } from "react";
import Card from "./Card";
import LoadMoreButton from "./LoadMoreButton";

const ListOfComics = ({ comics }) => {
	const [loadMore, setLoadMore] = useState(20);

	const loadMoreComics = () => {
		setLoadMore(loadMore + 20);
	}

	return (
		<div>
			<div className="gap-4 grid grid-cols-5 p-8">
				{
					comics.slice(0, loadMore).map(comic => <Card key={comic.id} {...comic}/>)
				}
			</div>
			<div>
				{
					loadMore < comics.length
					&&
					<LoadMoreButton loadMoreComics={loadMoreComics}/>
				}
			</div>
		</div>
	);
}

export default ListOfComics;