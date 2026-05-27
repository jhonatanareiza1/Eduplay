import { useDispatch, useSelector } from "react-redux";
import EduplayNuevoJ from "./EduplayNuevoJ";
import { startLogout } from "../../actions/auth";
import { starNewNote } from "../../actions/notes";

export const SideBar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(starNewNote());
  };
  return (
    <aside className="eduplay__sidebar">
      <div className="eduplay__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> {name}</span>
        </h3>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="eduplay__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">Nueva participación</p>
      </div>

      <EduplayNuevoJ />
    </aside>
  );
};
