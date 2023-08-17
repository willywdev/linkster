import socials from "./social_links";
import "./Socials.css";

export default function Socials() {
  return (
    <div className="socials__wrapper">
      {socials.map((social, index) => (
        <article key={index} className="socials__cards">
          <a href={social.url} target="_blank" rel="noreferrer">
            <img
              src={social.img}
              alt={social.name}
              className="socials__logos"
            />
          </a>
        </article>
      ))}
    </div>
  );
}
