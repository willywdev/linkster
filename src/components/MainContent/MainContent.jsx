import "./MainContent.css";
import links from "./links";

export default function MainContent() {
  return (
    <main className="main-content">
      <RenderLanguages language="vanilla" />
      <RenderLanguages language="general" />
      <RenderLanguages language="python" />
      <RenderLanguages language="react" />
    </main>
  );
}

function RenderLanguages({ language }) {
  const icons = [{ name: "vanilla", images: ["", "", ""] }];
  return (
    <section className="main-content__section">
      <h1 className="main-content__card-render-language">
        {language.toUpperCase()}{" "}
        {icons
          .filter((icon) => {
            return icon.name === language;
          })
          .map((icon) => {
            return icon.images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  className="main-content__headline-image"
                />
              );
            });
          })}
      </h1>
      {links
        .filter((link) => {
          return link.language.includes(language);
        })
        .map((link, index) => (
          <a
            href={link.url}
            key={index}
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
        ))}
    </section>
  );
}
