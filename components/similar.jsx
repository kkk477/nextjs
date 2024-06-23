import { getMovie } from "../components/movie-info";
import { getMovies } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css"

export async function Similar({ id }) {
    const movie = await getMovie(id);
    const movieList = await getMovies();
    const genres = [];
    movie.genres.map(arr => genres.push(arr.id));

    return (
        <div className={styles.similarContainer}>
            <h3 className={styles.recommendationText}>Recommendation</h3>
            <div className={styles.recommendationContainer}>{
                movieList.map(movie => genres.filter(x => movie.genre_ids.includes(x)) ?
                    <div className={styles.recommendation}>
                        <img src={movie.poster_path} className={styles.recommendationPoster} alt={movie.title} />
                    </div> : ''
                )
            }</div>
        </div>
    );
}