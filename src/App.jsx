import { BrowserRouter, Route, Routes } from "react-router";
import { SearchProvider } from "./context/CreateContext";
import ErrorPage from "./pages/ErrorPage";
import DetailsofMovie from "./pages/DetailsofMovie";
import ListOfMovies from "./pages/ListOfMovies";
// import Pagination from "./components/Pagination";

function App() {
  return (

    
      
    <BrowserRouter>
        
        <SearchProvider>
        <Routes>

        <Route path="/" element={<Movies />} />
          <Route path="/search/:search/page/:page" element={<ListOfMovies />} />
          <Route path="/:id" element={<DetailsofMovie/>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
        </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
