import axios from "axios";
import { useContext, useEffect } from "react";
import { SearchContext } from "../context/CreateContext";

const url = "https://www.omdbapi.com/?";
const Api_Key = "e0c30b03";

const GetMoviesCards = () => {
  const { state, dispatch } = useContext(SearchContext);
 

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING", payload: true }); // Start loading
      try {
        const res = await axios.get(
          `${url}apikey=${Api_Key}&s=${state.searchVal}&page=${state.currentPage || 1}`
        );
        if (res.status === 200) {
          dispatch({ type: "SET_MOVIES", payload: {movies: res.data.Search ,totalResults:+res.data.totalResults || 1,totalPages:Math.ceil(+res.data.totalResults/10),currentPage:state.currentPage} });
        } else {
          throw new Error("Failed to fetch movies");
        }
      } catch (err) {
        console.error("Error:", err.message);
        dispatch({ type: "SET_ERROR", payload: err.message });
      } finally {
        dispatch({ type: "LOADING", payload: false }); 
      }
    };

    if (state.searchVal) {
      fetchData(); 
    }
  }, [state.searchVal, state.currentPage, dispatch]);
  
};


export const GetMovie = async (id) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${Api_Key}`);
    if (!response.ok) throw new Error("Failed to fetch movie details");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in GetMovie:", error);
    throw error; 
  }
};


export { GetMoviesCards };
