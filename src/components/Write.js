import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/Write.css";

function Write() {
  const title = useRef(null);
  const content = useRef(null);

  const numbers = useFetch(`http://localhost:3001/numbers`);
  const lastNumber = numbers.length;
  const postsLen = numbers[lastNumber - 1];
  const navigate = useNavigate();

  console.log(postsLen);

  function submitPost(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: lastNumber + 1,
        title: title.current.value,
        content: content.current.value,
        date: Date(),
      }),
    }).then((res) => {
      if (res.ok) {
        alert("글 등록 완료");
        navigate(`/`);
      }
    });
    fetch(`http://localhost:3001/numbers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lastNumber + 1),
    });
  }

  return (
    <div className="write">
      <form onSubmit={submitPost}>
        <div className="ipt_wrap">
          <input
            className="ipt_txt"
            type="text"
            name="title"
            placeholder="제목을 입력하세요"
            ref={title}
            required
          />
        </div>
        <div className="ipt_wrap">
          <textarea
            className="ipt_ta"
            name="content"
            placeholder="내용을 입력하세요"
            ref={content}
            required
          />
        </div>
        <div className="btn_wrap">
          <button className="btn_style btn_del">취소</button>
          <button className="btn_style btn_sbm">저장</button>
        </div>
      </form>
    </div>
  );
}

export default Write;
