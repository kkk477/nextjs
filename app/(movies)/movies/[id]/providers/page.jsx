import { Suspense } from "react";
import { Provider } from "../../../../../components/provider-info.jsx"
import { getMovie } from "../../../../../components/movie-info.jsx"

export async function generateMetadata({params: {id}}) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default function Page({params: {id}}) {
    return (
    <div>
        <Suspense fallback={<h1>Loading provider info</h1>}>
            <Provider id={id} />
        </Suspense>
    </div>
    );
}