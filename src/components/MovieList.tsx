import { For } from "solid-js";
import { createQuery } from '@tanstack/solid-query'
import { QueryBoundary } from "./query-boundary";
import { fetchMovies } from "../utils/api";

export default function MovieList() {

    const query = createQuery(() => ({
        queryKey: ["movies"],
        queryFn: fetchMovies,
        staleTime: 10000,
        gcTime: 10000
    }))

    return (
        <QueryBoundary
            query={query}
            loadingFallback={<div>loading ...</div>}
            errorFallback={(err, retry) => (
                <div>
                    <div class="error">{err.message}</div>
                    <button
                        onClick={() => {
                            retry()
                        }}
                    >
                        retry
                    </button>
                </div>
            )}
        >
            {(movies) => (
                <For each={movies}>
                    {(movie) => (
                        <li>
                            {movie.title} ({movie.release_date})
                        </li>
                    )}
                </For>
            )}
        </QueryBoundary>
    )
}
