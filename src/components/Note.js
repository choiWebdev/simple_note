import React from "react";
import "../styles/Note.css";
import { Link } from "react-router-dom";

function Note() {
  return (
    <div className="note">
      <Link to="*">
        <h3 className="subject">노트 제목입니다.</h3>
        <div className="content">
          노트 내용입니다. 최대 2줄까지 노출됩니다. 노트 내용입니다. 최대 2줄까지
          노출됩니다. 노트 내용입니다. 최대 2줄까지 노출됩니다. 노트 내용입니다.
          최대 2줄까지 노출됩니다. 노트 내용입니다. 최대 2줄까지 노출됩니다. 노트
          내용입니다. 최대 2줄까지 노출됩니다. 노트 내용입니다. 최대 2줄까지
          노출됩니다.
        </div>
      </Link>
    </div>
  );
}

export default Note;
