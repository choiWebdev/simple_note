import React from "react";
import "../styles/Note.css";
import { Link } from "react-router-dom";

function Note({ poTit, poCon, poId }) {
  return (
    <div className="note">
      <Link to={`/view/${poId}`}>
        <h3 className="title">{poTit}</h3>
        <pre className="content">{poCon}</pre>
      </Link>
    </div>
  );
}

export default Note;
