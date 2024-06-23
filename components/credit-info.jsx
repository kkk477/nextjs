import { getVideos } from "./movie-videos";
import styles from "../styles/movie-videos.module.css"

export async function Credit({ id }) {
    const videos = await getVideos(id);
    
    return (
        <div className={styles.container}>
            {videos.map((video) => (video.type === 'Trailer' ? <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name} /> : ''))}
        </div>
    );
}