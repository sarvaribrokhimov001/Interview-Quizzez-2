import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <h1 className="navbar__logo"> Documentation </h1>
        <li> <Link className="navbar__link" to="/home"> Home </Link> </li>
        <li>
  <Link className="navbar__link" to="/questions">
    QUESTIONS
  </Link>
</li>

<li>
  <Link className="navbar__link" to="/answers">
    ANSWERS
  </Link>
</li>
 <li><Link to="/quiz" className="navbar__link">QUIZ</Link></li>
      </ul>
    </div>
  );
};
export default Navbar;