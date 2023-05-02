import "./Footer.scss";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <a href="https://www.instagram.com/bthegreat2021/" target="__blank">
            <FaInstagram className="footer-list__INSTAGRAM" />
          </a>
        </li>

        <li>
          <a href="https://github.com/BerthonyBeya/Moviez_App" target="__blank">
            <FaGithub className="footer-list__GITHUB" />
          </a>
        </li>
      </ul>
      <p>Berthony &copy; 2023</p>
    </div>
  );
};

export default Footer;
