import { API_URL } from "../app/(home)/page";

async function getVideos(id) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export async function MovieVideos({ id }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}