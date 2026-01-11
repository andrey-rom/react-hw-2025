import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";

export default function SocialLinks() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Youtube, label: "YouTube" },
  ];

  return (
    <div className="social-links">
      {socialLinks.map(({ icon, label }) => (
        <img key={label} src={icon} alt={label} />
      ))}
    </div>
  );
}

