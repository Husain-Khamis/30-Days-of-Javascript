import MovieCard from "./MovieCard"

export default function RecentlyViewed({ history, onMovieClick }) {

    if (history.length === 0) return null

    return(
        <div className="recently-viewed">
            <h2 className="recently-viewed-title">Recently Viewed</h2>
            <div className="movie-grid">
                {history.map((movie) => (
                    <MovieCard
                        key = {movie.imdbID}
                        movie = {movie}
                        onMovieClick={onMovieClick}
                    />
                ))}
            </div>
        </div>
    )
}