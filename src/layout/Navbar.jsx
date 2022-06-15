import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to={"/"} className="navbar-item">
          <p className="is-size-3">Cat Breeds API</p>
        </Link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-end">
          <Link to={"/about"} className="navbar-item">
            About
          </Link>
          <Link to={"/documentation"} className="navbar-item">
            Documentation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
