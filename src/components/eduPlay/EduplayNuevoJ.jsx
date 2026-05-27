import { useSelector } from "react-redux";
import EduplayNEntrada from "./EduplayNEntrada";

const EduplayNuevoJ = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="eduplay__entries">
      {notes.map((note) => (
        <EduplayNEntrada key={note.id} {...note} />
      ))}
    </div>
  );
};

export default EduplayNuevoJ;
