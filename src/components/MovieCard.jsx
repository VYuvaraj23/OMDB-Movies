import { useContext } from "react";
import { SearchContext } from "../context/CreateContext";
import { GetMovie } from "../service/Api";
import { useNavigate } from "react-router";

function MovieCard() {
  const { state, dispatch } = useContext(SearchContext);
const navigate=useNavigate()
  const handleClick = async (id) => {
    try {
      const movieDetails = await GetMovie(id); 
      dispatch({ type: "GET_DETAILS", payload: movieDetails });
      navigate(`/${id}`)
    } catch (error) {
      console.error("Error fetching movie details:", error);
      
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 my-10">
      {state.movies && state.movies.length > 0 ? (
        state.movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="relative border p-5 flex flex-col w-60 h-96 shadow-md rounded-lg bg-white"
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/600x400.png"
              }
              alt={movie.Title || "Movie poster"}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex flex-col mt-5">
              <h2 className="font-semibold text-center ">
                {movie.Title || "Unknown Title"} ({movie.Year || "Unknown Year"})
              </h2>
              <button
                className="absolute bottom-5 w-[82%] px-2 py-1 bg-green-600 rounded-md text-white font-normal text-center"
                onClick={() => handleClick(movie.imdbID)}
                
              >
                Details
              </button>
            </div>
          </div>
        ))
      ) : (
          
        <p className="font-bold text-3xl text-center">No movies found</p>
      )}
    </div>
  );
}

export default MovieCard;
