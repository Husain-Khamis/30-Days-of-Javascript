export default function MovieDetails( { movie , onBack}) {
    
    return(
        <div className="movie-details-wrapper">
            <div className="movie-details">
                <img
                src={movie.Poster === "N/A" ? "https://placehold.co/300x450?text=No+Image" : movie.Poster}
                alt={movie.Title}
                onError={(e) => e.target.src = "https://placehold.co/300x450?text=No+Image"}
                /> 
                <div className="movie-details-info">
                    <h1>{movie.Title}</h1>
                    <p>{movie.Year}</p> 
                    <p>{movie.Plot}</p>
                    <p><span>Director:</span> {movie.Director}</p>
                    <p><span>Actors:</span> {movie.Actors}</p>
                    <p><span>Rating:</span> {movie.imdbRating}</p>
                    <p><span>Runtime:</span> {movie.Runtime}</p>
                    <p><span>Genre:</span> {movie.Genre}</p>
                </div>
            </div>
            <button className="back-button" onClick={onBack}>Back</button>
        </div>
    )
}