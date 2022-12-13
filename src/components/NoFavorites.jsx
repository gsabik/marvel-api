import { Link } from "react-router-dom";

const NoFavorites = () => {
	return (
		<div className="flex flex-col h-[95vh] items-center justify-center space-y-4">
			<h2>Nothing in favorites!</h2>
			<Link to="/">View comics</Link>
		</div>
	);
}

export default NoFavorites