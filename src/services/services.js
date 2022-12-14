const BASE_URL = "https://gateway.marvel.com";
const TS = "1000";
const API_KEY = "a67a55accbb41ce1ec96e671b13d8feb";
const HASH = "f48adcc705631d9dc751b93cee30cde6";

export const requestComics = async(search) => {
	const URL = search ? `${BASE_URL}/v1/public/comics?titleStartsWith=${search}&ts=${TS}&apikey=${API_KEY}&hash=${HASH}` : `${BASE_URL}/v1/public/comics?limit=100&format=comic&formatType=comic&orderBy=focDate&ts=${TS}&apikey=${API_KEY}&hash=${HASH}`;
    const response = await fetch (URL);
    const data = await response.json();
    const dataResults = data.data.results;

	const comics = dataResults.map(comic => ({
		id: comic.id,
		title: comic.title,
		img: `${comic.images[0]?.path}.jpg`,
		creator: comic.creators.items[0]?.name,
	}));

	return comics;
}

export const requestComicById = async(id) => {
	const response = await fetch(`${BASE_URL}/v1/public/comics/${id}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`);
	const data = await response.json();
	const dataResults = data.data.results;

	console.log(data.data.results)

	const comicDetail = dataResults.map(comic => ({
		id,
		title: comic.title,
		img: `${comic.images[0].path}.jpg`,
		description: comic.textObjects[0]?.text,
		creator: comic.creators.items[0]?.name,
		purchase: comic.urls[2]?.url,
		printPrice: comic.prices[0]?.price,
		digitalPrice: comic.prices[1]?.price
	}));

	return comicDetail;
}

export const requestRecommended = async(title) => {
	const response = await fetch(`${BASE_URL}/v1/public/comics?titleStartsWith=${title}&ts=${TS}&apikey=${API_KEY}&hash=${HASH}`);
	const data = await response.json();
	const dataResults = data.data.results;

	const comicsByTitle = dataResults.slice(0, 5).map(comic => ({
		id: comic.id,
		title: comic.title, 
		img:`${comic.images[0].path}.jpg`,
		creator: comic.creators.items[0]?.name,
	}));

	return comicsByTitle;
}