import './styles.css'

function Header() {
  return (
      <header className="header">
        <a className="header__logo-link" href="/">
          <img
            className="header__logo"
            src="./img/Logo.svg"
            alt="logo"
            width="82"
            height="89"
          />
        </a>
      </header>
  );
}

export default Header;
