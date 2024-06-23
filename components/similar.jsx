"use client"
import styles from "../styles/movie-info.module.css"
import { useRouter } from "next/navigation";

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getMovies() {
    return fetch(API_URL).then(response => response.json());
}

export async function Similar({ id }) {
    const router = useRouter();
    
    const movie = await getMovie(id);
    const movieList = await getMovies();
    const genres = [];
    movie.genres.map(genre => genres.push(genre.id));

    return (
        <div className={styles.similarContainer}>
            <h3 className={styles.recommendationText}>Recommendation</h3>
            <div className={styles.recommendationContainer}>{
                movieList.map(movie => genres.filter(x => movie.genre_ids.includes(x)) ?
                    <div className={styles.recommendation}>
                        <img src={movie.poster_path} className={styles.recommendationPoster} alt={movie.title} onClick={() => {router.push(`/movies/${movie.id}`)}}/>
                    </div> : ''
                )
            }</div>
        </div>
    );
}