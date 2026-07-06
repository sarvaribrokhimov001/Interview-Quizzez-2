import '../styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__logo"> Documentation </h2>

        <ul className="footer__links">
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
        
        <p className="footer__copy"> © 2026 Documentation | Built with React </p>
      </div>
    </footer>
  )}
export default Footer;