import "./MainContent.css";
import links from "./links";

export default function MainContent() {
  return (
    <>
      <RenderVanilla />
      {links.map((link, index) => (
        <section key={index} className="main-content__section">
          <a
            href={link.url}
            target="_blank"
            className="main-content__card-link"
            rel="noreferrer">
            <article className="main-content__card">
              <img
                src={link.imgSrc}
                alt={link.text}
                className="main-content__card-logo"
              />
              <p className="main-content__card-text">{link.text}</p>
            </article>
          </a>
        </section>
      ))}
    </>
  );
}

function RenderVanilla() {
  return (
    <h1 className="main-content__card-render-language">Vanilla HTML,CSS,JS</h1>
  );
}
