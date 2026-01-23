import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl max-auto px-4">
        <div classname = "flex-items-center justify-between h-16">
          {/*logo section*/}
          <Link to="/login" className="text-xl font-bold">
            🍒 Cherrybot
          </Link>
          {/*navigation links*/}
          <div className="flex justify-end items-end gap-4">
            <Link to="/login" className="px-4 py-2 rounded hover:bg-gray-700 transition">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 rounded hover:bg-gray-700 transition">
              Register
            </Link>
            </div>
        </div>
      </div>
    </nav>
  )
}
