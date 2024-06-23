import { Suspense } from "react";
import { Credit } from "../../../../../components/credit-info.jsx"
import { MovieInfo, getMovie } from "../../../../../components/movie-info.jsx"

export async function generateMetadata({params: {id}}) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default function Page({params: {id}}) {
    return (
    <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading credit info</h1>}>
            <Credit id={id} />
        </Suspense>
    </div>
    );
}