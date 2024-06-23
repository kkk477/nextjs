import { Suspense } from "react";
import { MovieInfo } from "../../../../../components/movie-info.jsx";
import { Similar } from "../../../../../components/similar.jsx";

export default function Page({params: {id}}) {
    return (
    <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading similar info</h1>}>
            <Similar id={id} />
        </Suspense>
    </div>
    );
}