import MovieCard from './MovieCard'

export default function MovieGrid({movieData, onMovieClick}) {
    return (
        <div>
            {movieData.map((movie) => (
                <MovieCard
                    key = {movie.imdbID}
                    movie = {movie}
                    onMovieClick={onMovieClick}
                />
            ))}
        </div>
    )
}