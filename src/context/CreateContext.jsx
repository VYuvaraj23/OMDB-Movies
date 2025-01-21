import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload.movies, error: null,totalPages: action.payload.totalPages, totalResults:action.payload.totalResults}; 
    case "SET_PAGE":
      return { ...state, currentPage: action.payload  };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SEARCH_VALUE":
      return { ...state, searchVal: action.payload };
    case "GET_DETAILS":
      return {...state,imdb:action.payload}

    default:
      return state;
  }
};
const initial = {
  searchVal: "",
  loading: true,
  movies: null,
  error: null,
  totalResults:0,
  currentPage: 1,
  totalPages: 1,
  imdb:null,
};

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
