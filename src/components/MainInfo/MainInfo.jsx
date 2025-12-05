import "./MainInfo.css";
import Image from "../../assets/Image.png";
import Star from "../../assets/TrustPilot.svg";

export default function MainInfo() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Beautiful food & <span className="highlight">takeaway,</span>{" "}
              delivered to your door.
            </h1>
            <p className="hero-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <button className="cta-button">Place an Order</button>

          <div className="rating-section">
            <div className="rating-text">
              <img src={Star} alt="Star" />
              <p className="rating-title">Trustpilot</p>
            </div>
            <p className="rating-description">
              <p className="rating-value">4.8 out of 5</p>
              <p> based on 2000+ reviews</p>
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
