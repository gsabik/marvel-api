const LoadMoreButton = ({ loadMoreComics }) => {
	return (
		<button 
			className="bg-red-600 font-medium py-2 px-4 text-white transition-colors w-fit hover:bg-red-700" 
			onClick={loadMoreComics}
		>Load more</button>
	);
}

export default LoadMoreButton;