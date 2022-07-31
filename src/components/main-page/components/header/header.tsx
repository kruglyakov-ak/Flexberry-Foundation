import './styles.css'
import logo from '../../../../assets/icons/Logo.svg';

function Header() {
  return (
      <header className="header">
        <a className="header__logo-link" href="/">
          <img
            className="header__logo"
            src={logo}
            alt="logo"
            width="82"
            height="89"
          />
        </a>
      </header>
  );
}

export default Header;
