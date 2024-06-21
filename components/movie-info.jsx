import { API_URL } from "../app/(home)/page";

async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export async function MovieInfo({ id }) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}