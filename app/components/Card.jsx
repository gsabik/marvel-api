import Link from "next/link";

const Card = ({ id, title, img, creator }) => {
	return (
		<div className="flex flex-col space-y-4">
				<img className="h-[350px]" src={img === "undefined.jpg" ? "/not-found.jpg" : img}/>
				<div className="flex flex-col">
					<Link href="/comics/[id]" as={`/comics/${id}`}>
						<h4 className="font-semibold">{title}</h4>
					</Link>
					<p>{creator}</p>
				</div>
		</div>
	);
}

export default Card;