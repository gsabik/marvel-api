import { Link } from "react-router-dom";

const Card = ({ id, title, img, creator }) => {
	return (
		<div className="flex flex-col space-y-4">
			<img
				alt={title}
				src={img}
			/>
			<div className="flex flex-col space-y-0">
				<Link to={`/comic/${id}`} className="font-semibold text-lg hover:text-red-500">{title}</Link>
				<p>{creator}</p>
			</div>
		</div>
	);
}

export default Card