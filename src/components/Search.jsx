import { useContext } from "react";
import { SearchContext } from "../context/CreateContext";

function Search() {
  const { dispatch } = useContext(SearchContext);

  const handleChange = (e) => {
    const delay = setTimeout(() => {
      
      dispatch({ type: "SET_SEARCH_VALUE", payload: e.target.value });
    }, 1500)
    return ()=>clearTimeout(delay)
  };

  return (
    <div className="text-center space-y-4 my-5 ">
      <h1 className="text-4xl font-bold text-[#6037c0]">Movies Search App</h1>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Search for a Movies..."
        className="border outline-cyan-800 bg-slate-200 rounded-lg px-3 w-64 py-1"
      />
    </div>
  );
}

export default Search;
