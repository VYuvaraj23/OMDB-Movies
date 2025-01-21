import { useContext } from "react"
import { SearchContext } from "../context/CreateContext"
import { Link } from "react-router"

function DetailsofMovie() {
  const { state } = useContext(SearchContext)
  const movie =state.imdb
  return (
    <div className="bg-slate-300 h-[100vh] flex flex-col justify-center items-center" >
      <p>click here <Link to={'/'} className="underline text-sky-900">Home</Link></p>

<img src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/600x400.png"
              }
              alt={movie.Title || "Movie poster"}
              className="w-64 object-cover rounded-md"
      />
      <table className="bg-white">
        <tbody className="p-5">
          <tr>
            <th>Title :</th>
            <td>{movie.Title }</td>
          </tr>
          <tr>
            <th>Actors :</th>
            <td>{movie.Actors }</td>
          </tr>
          <tr>
            <th>Director :</th>
            <td>{movie.Director }</td>
          </tr>
          <tr>
            <th>Writer :</th>
            <td>{movie.Writer }</td>
          </tr>
          <tr>
            <th>Genre :</th>
            <td>{movie.Genre }</td>
          </tr>
          <tr>
            <th>Language :</th>
            <td>{movie.Language }</td>
          </tr>
          <tr>
            <th>imdbRating :</th>
            <td>{movie.imdbRating }</td>
          </tr>
          <tr>
            <th>Runtime :</th>
            <td>{movie.Runtime }</td>
          </tr>
          <tr>
            <th>Released :</th>
            <td>{movie.Released }</td>
          </tr>
          <tr>
            <th>Plot :</th>
            <td>{movie.Plot }</td>
          </tr>
        </tbody>
</table>
    </div>
  )
}

export default DetailsofMovie