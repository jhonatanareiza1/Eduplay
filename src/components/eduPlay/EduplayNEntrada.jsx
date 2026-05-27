import moment from "moment/moment";
import hero from "../../assets/0002.png";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const EduplayNEntrada = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
      activeNote(id, {
        date,
        title,
        body,
        url,
      }),
    );
  };
  return (
    <div className="eduplay__nentry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="eduplay__entry-img"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="eduplay___entry-body">
        <p className="eduplay__entry-title">{title}</p>
        <p className="eduplay__entry-content">{body}</p>
      </div>
      <div className="eduplay__fecha-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("D")}</h4>
      </div>
    </div>
  );
};

export default EduplayNEntrada;
