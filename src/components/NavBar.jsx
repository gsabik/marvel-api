import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="bg-neutral-800 text-white items-center flex flex-row justify-between px-8">
			<Link className="font-semibold m-4 text-2xl" to="/">Marvel API</Link>
			<Link className="font-semibold" to="/favorites">Favorites</Link>
		</div>
	);
}

export default NavBar