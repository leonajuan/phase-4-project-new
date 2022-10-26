import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/songs">Songs</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;