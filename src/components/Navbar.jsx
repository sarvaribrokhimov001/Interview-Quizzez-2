import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <h1 className="navbar__logo"> Interview 2 </h1>
        <li> <Link className="navbar__link" to="/home"> Home </Link> </li>
        <li> <Link className="navbar__link" to="/questions"> Questions </Link> </li>
        <li> <Link className="navbar__link" to="/answers"> Answers </Link> </li>
        <li> <Link className="navbar__link" to="/quiz"> Quiz </Link> </li>
      </ul>
    </div>
  );
};
export default Navbar;