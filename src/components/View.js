import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/View.css";

function View() {
  const { poNum } = useParams();
  const post = useFetch(`http://localhost:3001/posts/${poNum}`);

  return (
    <>
      <div className="view">
        <h4 className="title">{post.title}</h4>
        <pre className="content">{post.content}</pre>
      </div>
      <div className="btn_wrap">
        <button className="btn_style btn_del">취소</button>
        <button className="btn_style btn_sbm">저장</button>
      </div>
    </>
  );
}

export default View;
