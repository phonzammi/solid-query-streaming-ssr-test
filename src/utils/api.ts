export const fetchMovies = async () => {
    console.info("fetchMovies start")
    const response = await fetch('https://star-wars.brillout.com/api/films.json')
    // Simulate slow network
    await new Promise((r) => setTimeout(r, 6 * 1000))
    const movies: Movie[] = (await response.json()).results
    console.info("fetchMovies done")
    return movies
}

type Movie = {
    title: string
    release_date: string
}