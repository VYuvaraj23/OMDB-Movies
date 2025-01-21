import { useContext } from "react";
import { SearchContext } from "../context/CreateContext";
import { GetMoviesCards } from "../service/Api";
import MovieCard from "./movieCard";

const DisplayMovies = () => {
  GetMoviesCards();

  const { state } = useContext(SearchContext);

  return (
    <>
      {state.searchVal ? (
        <>
          {state.loading ? (
            <p className="font-bold text-3xl text-center">Loading...</p>
          ) : (
            <>
              <MovieCard />
            </>
          )}
        </>
      ) : (
        <p className="font-bold text-3xl text-center">Please search Movies</p>
      )}
    </>
  );
};

export default DisplayMovies;
