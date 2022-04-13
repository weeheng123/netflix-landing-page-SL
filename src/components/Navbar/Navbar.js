import "./Navbar.scss";
import { ReactComponent as LogoNetflix } from "../Assets/logo_netflix.svg";
import Navigation from "./Navigation";
import Search from "./Search";
import UserProfile from "./UserProfile";

function Navbar() {
  return (
    <div className="header">
      <div className="left-div">
        <div className="logo">
          <LogoNetflix />
        </div>
        <Navigation />
      </div>
      <Search />
      <UserProfile />
    </div>
  );
}

export default Navbar;
