import FavoritesButton from "./FavoritesButton";

const ComicDetails = ({ title, creator, description, img, printPrice, digitalPrice }) => {

	return (
		<div 
			className="text-white" 
			style={{
				backgroundImage: `url(${img})`,
				backgroundAttachment: "contain",
				backgroundPosition: "fixed",
				boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, .7	)"
		}}>
			<div className="flex justify-center p-10 w-full">
				<div className="flex h-full max-w-screen-xl mx-auto space-x-10 w-full">
					<img
						alt={title}
						src={img}
						className="h-[600px]"
					/>
					<div className="flex flex-col h-full space-y-8">
						<h1 className="font-bold text-3xl">{title}</h1>
						<p className="text-lg font-bold">
							Creator:<span className="font-normal text-md px-1">{creator}</span>
						</p>
						<p>{description}</p>
						<div className="flex flex-row justify-between w-full">
							<p className="text-lg font-bold">
								Print price:<span className="font-normal text-md px-1">{printPrice === undefined || printPrice === 0 ? "not available" : `$${printPrice}`}</span>
							</p>
							<p className="text-lg font-bold">
								Digital price:<span className="font-normal text-md px-1">{digitalPrice === undefined || digitalPrice === 0 ? "not available" : `$${digitalPrice}`}</span>
							</p>
						</div>
						<FavoritesButton/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ComicDetails;