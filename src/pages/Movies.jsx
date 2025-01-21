import { useParams } from "react-router";
import DisplayMovies from "../components/DisplayMovies";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { SearchContext } from "../context/CreateContext";
import { useContext, useEffect } from "react";

function Movies() {
  const { page } = useParams()
  const { dispatch } = useContext(SearchContext)
  useEffect(() => { 
    if (page) {
      dispatch({type:"SET_PAGE",payload:+page})
    }
  },[page,dispatch])
  return (
<>

      <Search />
      <DisplayMovies />
      <Pagination/>
</>
  );
}

export default Movies;
