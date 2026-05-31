import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MovieGrid from "../components/MovieGrid"
import LoadingSkeleton from "../components/SkeletonCard"
import DisplayErr from "../components/DisplayError"

export default function HomePage() {

    const [movieData, setMovieData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({ type: null, message: null })
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Home | Movie Search"
    }, [])

    useEffect(() => {

        const url = `http://www.omdbapi.com/?s=Avengers&apikey=${import.meta.env.VITE_API_KEY}`;

        const controller = new AbortController();

        async function fetchFeatured() {

            try{
                setIsLoading(true);
                setError({ type: null, message: null })

                const res = await fetch(url, {signal: controller.signal });
                const data = await res.json();

                if (data.Response === "False"){
                    setError({ type: "No Results", message: "Error, Unable to fetch Featured Movies" });
                }
                if (data.Response === "True"){
                    setError({ type: null, message: null });
                    setMovieData(data.Search);
                }
            } catch(err){
                if (err.name === "AbortError"){
                    setError({ type: null, message: null })
                } else {
                    setError({ type: "No Internet", message: "Error, No Internet" })
                }
            } finally{
                setIsLoading(false);
            }
        }

        fetchFeatured();

        return() => {
            controller.abort();
        }
    }, [])

    return (
    <div className="app-container">
        <h2 className="section-title">Featured Movies</h2>
        {isLoading ? (
        <div className="movie-grid">
            {Array.from({ length: 10 }, (_, i) => (
            <LoadingSkeleton key={i} />
            ))}
        </div>
        ) : error.type ? (
        <DisplayErr error={error} />
        ) : (
        <MovieGrid
            movieData={movieData}
            onMovieClick={(movie) => navigate(`/movie/${movie.imdbID}`)}
        />
        )}
    </div>
    )
}