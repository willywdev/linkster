import socials from "./social_links";
import "./Socials.css";

export default function Socials() {
  return (
    <div className="socials__wrapper">
      {socials.map((social, index) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="socials__link"
          key={index}>
          <article className="socials__cards">
            <img
              src={social.img}
              alt={social.name}
              className="socials__logos"
            />
          </article>
        </a>
      ))}
    </div>
  );
}
