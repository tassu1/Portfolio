import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { CgCodeSlash } from 'react-icons/cg';  // LeetCode Icon

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--social--icon">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "32px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.leetcode.com/"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            >
              <CgCodeSlash style={{ fontSize: "32px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "32px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "32px" }} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
