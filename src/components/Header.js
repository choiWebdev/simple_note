import { Link } from "react-router-dom";
import Switch from "./Switch";
import "../styles/Header.css";

function Header({tossToggleMode}) {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">
          Simple Note.
        </Link>
      </h1>
      <Switch tossToggleMode={tossToggleMode} />
    </header>
  );
}

export default Header;
