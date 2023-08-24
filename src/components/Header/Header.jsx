import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <h1 className="header__headline">
          <img className="header__logo" src="./icons8-linktree.svg"></img>{" "}
          Linkster
        </h1>
      </a>
    </header>
  );
}
