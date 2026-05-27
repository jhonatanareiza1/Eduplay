import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark nav__use">
      <Link className="navbar-brand" to="/">
        Ininicio
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/ingles">
            INGLES
          </NavLink>

          <NavLink className="nav-item nav-link" to="/matematicas">
            MATEMATICAS
          </NavLink>

          <NavLink className="nav-item nav-link" to="/matematicas">
            TIENDA
          </NavLink>

          <NavLink className="nav-item nav-link" to="/matematicas">
            RANKING
          </NavLink>

          <NavLink className="nav-item nav-link" to="/matematicas">
            RETOS
          </NavLink>

          <NavLink className="nav-item nav-link" to="/matematicas">
            PROGRESO
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className="nav-item nav-link btn btn__navbar btn-text"
            to="/login"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
