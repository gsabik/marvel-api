import { Link } from "react-router-dom";

const Card = ({ id, title, img, creator }) => {
	return (
		<div className="flex flex-col space-y-4">
			<Link to={`/comic/${id}`}>
				<div className="flex justify-center sm:justify-start">
					<img
						alt={title}
						className="h-[350px] shadow-xl"
						src={img}
					/>
				</div>
			</Link>
			<div className="flex flex-col justify-center space-y-0 sm:justify-start">
				<Link to={`/comic/${id}`} className="duration-300 font-semibold text-center text-lg hover:text-red-500 sm:text-start">{title}</Link>
				<p className="text-center sm:text-start">{creator}</p>
			</div>
		</div>
	);
}

export default Card