import Link from "next/link";

const LINKS = [
	{
		label: "Home",
		route: "/"
	},
	{
		label: "Favorites",
		route: "/favorites"
	}
];

const Navbar = () => {
	return (
		<header className="bg-neutral-900">
			<nav>
				<ul className="flex flex-row justify-between p-6 text-white">
					{
						LINKS.map(({ label, route }) => (
							<li key={route}>
								<Link className="font-semibold" href={route}>
									{label}
								</Link>
							</li>
						))
					}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;