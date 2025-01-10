import "./Header.scss";
import logo from "../../assets/logo/Scotiabank_logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      <h3 className="header__login">Login</h3>
    </header>
  );
}

export default Header;
