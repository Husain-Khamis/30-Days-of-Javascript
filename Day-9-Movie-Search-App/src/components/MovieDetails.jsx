export default function MovieDetails( { movie }) {
    
    return(
        <div>
            <img
                src={movie.Poster === "N/A" ? "https://placehold.co/300x450?text=No+Image" : movie.Poster }
                alt={movie.Title}
            />
            <p>{movie.Year}</p> 
            <p>{movie.Plot}</p>
            <p>{movie.Director}</p>
            <p>{movie.Actors}</p>
            <p>{movie.imdbRating}</p>
            <p>{movie.Runtime}</p>
            <p>{movie.Type}</p> 
            <p>{movie.Genre}</p>
        </div>
    )
}