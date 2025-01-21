import { Link } from "react-router"

function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p>click here <Link to={"/"} className="underline text-sky-800" >Home</Link></p>
      </div>
  )
}

export default ErrorPage