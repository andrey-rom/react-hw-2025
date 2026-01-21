import "./MainInfo.css";
import Image from "../../assets/Image.png";
import Star from "../../assets/TrustPilot.svg";
import { useLanguage } from "../../contexts/LanguageContext";

export default function MainInfo() {
  const { t } = useLanguage();
  
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {(() => {
                const title = t("mainInfo.title");
                const highlight = t("mainInfo.highlight");
                const parts = title.split(highlight);
                return (
                  <>
                    {parts[0]}
                    <span className="highlight">{highlight}</span>{" "}
                    {parts[1]}
                  </>
                );
              })()}
            </h1>
            <p className="hero-description">
              {t("mainInfo.description")}
            </p>
          </div>

          <button className="cta-button">{t("mainInfo.placeOrder")}</button>

          <div className="rating-section">
            <div className="rating-text">
              <img src={Star} alt="Star" />
              <p className="rating-title">{t("mainInfo.trustpilot")}</p>
            </div>
            <p className="rating-description">
              <p className="rating-value">{t("mainInfo.rating")}</p>
              <p className="rating-reviews"> {t("mainInfo.reviews")}</p>
            </p>
          </div>
        </div>

        {/* Right side - Food delivery image */}
        <div className="hero-image-wrapper">
          <div className="image-container">
            <img
              src={Image}
              alt="Delicious food delivery - hands holding burger and fries with payment apps"
              className="food-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

