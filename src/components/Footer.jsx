import '../styles/Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__logo"> Interview 2 </h2>

        <ul className="footer__links">
          <li> <Link className="navbar__link" to="/home"> Home </Link> </li>
          <li> <Link className="navbar__link" to="/questions"> Questions </Link> </li>
          <li> <Link className="navbar__link" to="/answers"> Answers </Link> </li>
          <li> <Link className="navbar__link" to="/quiz"> Quiz </Link> </li>
        </ul>
        
        <p className="footer__copy"> © 2026 Interview Quizzez 2 | Built with React </p>
      </div>
    </footer>
  )}
export default Footer;