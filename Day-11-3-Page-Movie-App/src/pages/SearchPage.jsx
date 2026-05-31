import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from '../components/SearchInput';
import MovieGrid from '../components/MovieGrid';
import useDebounce from '../hooks/useDebounce';
import DisplayErr from '../components/DisplayError';
import LoadingSkeleton from '../components/SkeletonCard';
import RecentlyViewed from '../components/RecentlyView';

export default function SearchPage() {

    const [searchInput, setSearchInput] = useState(sessionStorage.getItem('lastSearch') || "");
    const [movieData, setMovieData] = useState([]);
    const [error, setError] = useState({ type: null, message: null });
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = searchInput ? `${searchInput} | Movie Search` : "Search | Movie Search"
    }, [searchInput])

    useEffect(() => {
        sessionStorage.setItem('lastSearch', searchInput)
    }, [searchInput])

    const debounce = useDebounce(searchInput, 400);
    
    const url = `http://www.omdbapi.com/?s=${debounce}&apikey=${import.meta.env.VITE_API_KEY}`;

    useEffect(() => {

        const controller = new AbortController();

        async function fetchMovies() {

            if (debounce === ""){
                setMovieData([])
                return
            }

            try{
                setIsLoading(true);
                setError({ type: null, message: null })

                const res = await fetch(url, { signal : controller.signal });
                
                const MovieData = await res.json();

                if (MovieData.Response === "False") {
                    setError({ type: "No Results", message: "Error, No results were found"})
                }
                if (MovieData.Response === "True"){
                    setError({type: null, message: null})
                    setMovieData(MovieData.Search);
                }

            } catch(err){
                if (err.name === "AbortError"){
                    setError({ type: null, message: null })
                } else {
                    setError({ type: "No internet", message: "Error, No Internet" })
            }
            } finally{
                setIsLoading(false);
            }
        }

        fetchMovies()

        return () => {
            controller.abort()
        }

    }, [debounce])

    return (
    <div className='app-container'>
        <header className='app-header'>
            <h1 className='app-title'>Movie Search</h1>
            <SearchInput
            value={searchInput}
            onChange={(value) => {
                setSearchInput(value)
                setError({ type: null, message: null })
            }}
            />
            {searchInput === "" && <p className="app-tagline">Search Millions of movies, TV shows and more!</p>}
        </header>
        
        {isLoading ? (
        <div className='movie-grid'>
            {Array.from({ length: 10 }, (_, i) => (
            <LoadingSkeleton key={i} />
            ))}
        </div>
        ) : error.type ? (
        <DisplayErr error={error} />
        ) : (
        <MovieGrid
            movieData={movieData}
            onMovieClick={(movie) => {
                navigate(`/movie/${movie.imdbID}`)
            }}
        />
        )}

        <RecentlyViewed
        history={history}
        onMovieClick={(movie) => {
            navigate(`/movie/${movie.imdbID}`)
        }}
        />
    </div>
    )
}
