import GamesAppBar from "./GamesAppBar";
import InglesScreen from "../ingles/InglesScreen";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useRef } from "react";
import { activeNote, startDeliting } from "../../actions/notes";
import MateScreen from "../matematicas/mateScreen";
import EduPlayDashboard from "./GameDashBoard";
import { EduPlayDashboard2 } from "./EduplayDashboard2";
import GameDashBoard from "./GameDashBoard";

const GameScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);

  const activeId = useRef(note.id);

  const { body, title, id } = formValues;

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeliting(id));
  };

  return (
    <div className="game__main-content">
      <GamesAppBar />
      <EduPlayDashboard />
      <EduPlayDashboard2 />
      <MateScreen />
      <InglesScreen />
      <div className="games__content">
        <input
          type="text"
          placeholder="algo"
          className="game__title-input"
          name="title"
          value={title}
          onChange={handleInputChange}
        ></input>
        <textarea
          placeholder="que jugamos hoy"
          className="game__notas"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="game__imagen">
            <img className="game__new-img" src={note.url} alt="personaje" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        borrar
      </button>
    </div>
  );
};

export default GameScreen;
