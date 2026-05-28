export default function MovieCard({ movie, onMovieClick }) {

    return (
        <div onClick={() => onMovieClick(movie)}>
            <img
                src={movie.Poster === "N/A" ? "https://placehold.co/300x450?text=No+Image" : movie.Poster }
                alt={movie.Title}
            />    
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
        </div>
    )
}