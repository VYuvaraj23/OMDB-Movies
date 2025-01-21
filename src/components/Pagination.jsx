import { useContext } from "react";
import { SearchContext } from "../context/CreateContext";
import { useNavigate } from "react-router";

function Pagination() {
  const { state, dispatch } = useContext(SearchContext);
  const navigate = useNavigate()

  const handlePageChange = (newPage) => {
    dispatch({ type: "SET_PAGE", payload: newPage });
    
    
    navigate(`/search/${state.searchVal}/page/${newPage}`)
  };

  return (
    <div className="flex justify-center items-center gap-4 my-5 fixed -bottom-5 w-full bg border-t py-3  bg-slate-300">
      <button
        onClick={() => handlePageChange(state.currentPage - 1)}
        disabled={state.currentPage === 1}
        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
      >
        Previous
      </button>
      <span>
        Page {state.currentPage} of {state.totalPages}
      </span>
      <button
        onClick={() => handlePageChange(state.currentPage + 1)}
        disabled={state.currentPage === state.totalPages}
        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
