import "./index.scss";
import { Button } from "../index";
import logo from "../../../assets/f-logo-letter.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="F letter" className="header-logo" />
      <Button>Sign-in</Button>
    </header>
  );
}

export default Header;
