import "./Footer.css";
import Logo from "../../assets/Logo.svg";
import { firstSectionLinks, secondSectionLinks, thirdSectionLinks } from "../../constants/footer";
import SocialLinks from "./SocialLinks";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo-group">
              <img src={Logo} alt="logo" />
            </div>
            <p className="footer-description">
              Takeaway & Delivery template for small - medium businesses.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              {firstSectionLinks.map((item) => (
                <li key={item}>
                  <a className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Template</h3>
            <ul className="footer-links">
              {secondSectionLinks.map((item) => (
                <li key={item}>
                  <a href="https://google.com" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Flowbase</h3>
            {thirdSectionLinks.map((item) => (
                <li key={item}>
                  <a href="https://google.com" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            Built by <a>Flowbase</a> · Powered by <a>Webflow</a>
          </p>

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
