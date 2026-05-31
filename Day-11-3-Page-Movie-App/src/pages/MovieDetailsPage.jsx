import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import MovieDetails from '../components/MovieDetails'
import SkeletonDetails from '../components/SkeletonDetails'

export default function MovieDetailPage() {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isLoadingDetails, setIsLoadingDetails] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedMovie) {
            document.title = `${selectedMovie.Title} | Movie Search`
        }
    }, [selectedMovie])

    useEffect(() => {
        const controller = new AbortController()

        async function fetchDetails() {
            if (!id) return

            try {
                setIsLoadingDetails(true)
                const detailedURL = `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
                const res = await fetch(detailedURL, { signal: controller.signal })
                const data = await res.json()
                setSelectedMovie(data)
            } catch(err) {
                if (err.name !== "AbortError") {
                    
                }
            } finally {
                setIsLoadingDetails(false)
            }
        }

        fetchDetails()
        return () => controller.abort()
    }, [id])

    return (
        <div className="app-container">
            {isLoadingDetails ? (
                <SkeletonDetails />
            ) : selectedMovie ? (
                <MovieDetails 
                    movie={selectedMovie}
                    onBack={() => navigate(-1)}
                />
            ) : null}
        </div>
    )
}