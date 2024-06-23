import { getMovie } from "./movie-info";
import styles from "../styles/movie-info.module.css"

export async function Provider({ id }) {
    const movie = await getMovie(id);
    
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                {movie.production_companies.map((company) => 
                <div>
                    <img src={company.logo_path} alt={company.name} />
                    <h3>{company.name}</h3>
                </div>)}
            </div>
        </div>
    );
}