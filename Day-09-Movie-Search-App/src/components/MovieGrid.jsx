import MovieCard from './MovieCard'

export default function MovieGrid({movieData, onMovieClick}) {
    return (
        <div className='movie-grid'>
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