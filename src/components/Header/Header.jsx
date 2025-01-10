import "./Header.scss";
import logo from "../../assets/logo/Scotiabank_logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <header className="header">
        <img className="header__logo" src={logo} />
        <h3 className="header__login">Login</h3>
      </header>
    </Link>
  );
}

export default Header;
