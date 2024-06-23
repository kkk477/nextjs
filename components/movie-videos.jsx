import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

export async function getVideos(id) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export async function MovieVideos({ id }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map((video) => <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name} />)}
        </div>
    );
}