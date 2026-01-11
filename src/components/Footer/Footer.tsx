import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";
import Logo from "../../assets/Logo.svg";
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
              {["Home", "Order", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Template</h3>
            <ul className="footer-links">
              {[
                "Style Guide",
                "Changelog",
                "Licence",
                "Webflow University",
              ].map((item) => (
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
            <a className="footer-link">More Cloneables</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            Built by <a>Flowbase</a> · Powered by <a>Webflow</a>
          </p>

          <div className="social-links">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon, label }) => (
              <img key={label} src={icon} alt={label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

