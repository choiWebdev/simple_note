import React from "react";
import "../styles/Note.css";
import { Link } from "react-router-dom";

function Note({ poTit, poCon, poId, poNum }) {
  return (
    <div className="note">
      <Link to={`/view/${poNum}`}>
        <h3 className="title">{poTit}</h3>
        <div className="content">{poCon}</div>
      </Link>
    </div>
  );
}

export default Note;
