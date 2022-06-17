import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar is-fixed" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to={"/"} className="navbar-item">
          <p className="is-size-3">CB API</p>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link
            to={"/about"}
            className="navbar-item navbar-item-2 navbar-item-3"
          >
            About
          </Link>
          <Link
            to={"/documentation"}
            className="navbar-item navbar-item-2 navbar-item-3"
          >
            Documentation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
