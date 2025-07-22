import React from "react";

function NoPost() {
  return (
    <div
      className="no_post"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(80vh - 30rem)",
      }}
    >
      <p
        style={{
          fontSize: "1.6rem",
          opacity: 0.5,
        }}
      >
        등록된 글이 없습니다.
      </p>
    </div>
  );
}

export default NoPost;
