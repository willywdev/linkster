import "./MainContent.css";
import git from "./assets/2993773_git_social media_icon.svg";

export default function MainContent() {
  return (
    <>
      <section className="main-content__section">
        <a href="" target="_blank" className="main-content__card-link">
          <article className="main-content__card">
            <img src={git} className="main-content__card-logo"></img>
            <p>Git Warlock 🔮</p>
          </article>
        </a>
      </section>
      <section className="main-content__section">
        <a href="" target="_blank" className="main-content__card-link">
          <article className="main-content__card">
            <img src={git} className="main-content__card-logo"></img>
            <p>Git Warlock 🔮</p>
          </article>
        </a>
      </section>
    </>
  );
}
