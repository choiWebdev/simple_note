import "../styles/Note.css";
import { Link } from "react-router-dom";
import ListMenu from "./ListMenu";

function Note({ title, content, id }) {
  return (
    <div className="note">
      <Link to={`/view/${id}`}>
        <h3 className="title">{title}</h3>
        <pre className="content">{content}</pre>
      </Link>
      <ListMenu id={id} />
    </div>
  );
}

export default Note;
