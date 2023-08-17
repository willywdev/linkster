import "../../../public/github.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__headline">Linkster</h1>
      <div className="header__github-wrapper">
        <a
          href="https://github.com/willywdev"
          className="header__github-link"
          target="_blank"
          rel="noreferrer">
          <img src="./github.svg" className="header__github-logo"></img>
          <p>Github</p>
        </a>
      </div>
    </header>
  );
}
