import { startSaveNote, startUploading } from "../../actions/notes";
import { useDispatch, useSelector } from "react-redux";

const GamesAppBar = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureUp = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="games__appbar">
      <span>28 de Agosto 2026</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureUp}>
          Game
        </button>

        <button className="btn" onClick={handleSave}>
          guardar
        </button>
      </div>
    </div>
  );
};

export default GamesAppBar;
