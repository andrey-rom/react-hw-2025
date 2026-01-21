import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";
import Logo from "../../assets/Logo.svg";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo-group">
              <img src={Logo} alt="logo" />
            </div>
            <p className="footer-description">
              {t("footer.description")}
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t("footer.company")}</h3>
            <ul className="footer-links">
              {[t("footer.home"), t("footer.order"), t("footer.faq"), t("footer.contact")].map((item) => (
                <li key={item}>
                  <a className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t("footer.template")}</h3>
            <ul className="footer-links">
              {[
                t("footer.styleGuide"),
                t("footer.changelog"),
                t("footer.licence"),
                t("footer.webflowUniversity"),
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
            <h3 className="footer-title">{t("footer.flowbase")}</h3>
            <a className="footer-link">{t("footer.moreCloneables")}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            {t("footer.builtBy")} <a>Flowbase</a> · {t("footer.poweredBy")} <a>Webflow</a>
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

