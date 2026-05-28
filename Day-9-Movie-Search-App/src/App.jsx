import { useEffect, useState } from 'react'
import SearchInput from './components/SearchInput';
import MovieGrid from './components/MovieGrid';
import useDebounce from './hooks/useDebounce';
import DisplayErr from './components/DisplayError';
import LoadingSkeleton from './components/SkeletonCard';
import './App.css'
import MovieDetails from './components/MovieDetails';



export default function App() {

  const [searchInput, setSearchInput] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [error, setError] = useState({ type: null, message: null });
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [sidePanel, setSidePanel] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false)

  const debounce = useDebounce(searchInput, 400);

  const url = `http://www.omdbapi.com/?s=${debounce}&apikey=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {

    const controller = new AbortController();

    async function fetchMovies() {

      if (debounce === ""){
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

  useEffect(() => {

    const controller = new AbortController();

    async function fetchDetails() {

      if (selectedMovie === null) return;
      if (selectedMovie.Plot) return;

      const detailedURL = `http://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=${import.meta.env.VITE_API_KEY}`;

      try{
        setIsLoadingDetails(true);
        setError({ type: null, message: null })

        const res = await fetch(detailedURL, { signal : controller.signal});

        const detailedData = await res.json();

        setSelectedMovie(detailedData);

      } catch(err){
        if (err.name === "AbortError"){
          setError({ type: null, message: null})
        } else {
          setError({ type: "No Internet", message: "Error, No Internet" })
        }
      } finally {
        setIsLoadingDetails(false);
      }
    }

    fetchDetails();

    return () => {
      controller.abort()
    }

  }, [selectedMovie])

  console.log("sidePanel:", sidePanel, "selectedMovie:", selectedMovie)
  return (
    <>
    <SearchInput
      value={searchInput}
      onChange={setSearchInput} 
    />
    {error.type !== null && <DisplayErr error={error} />}
    {isLoading ? (
      Array.from({ length: 10}, (_, i) => (
        <LoadingSkeleton key={i} />
      ))
    ) : sidePanel ? (
      <MovieDetails movie={selectedMovie} />
    ) : (
        <MovieGrid
         movieData = {movieData}
         onMovieClick={(movie) => {
          setSidePanel(true)
          setSelectedMovie(movie)
         }} 
        />
    )}
    </>
  )
}
