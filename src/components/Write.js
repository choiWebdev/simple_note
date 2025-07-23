import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/Write.css";

function Write() {
  /* 입력 항목 ref */
  const title = useRef(null);
  const content = useRef(null);

  /* 수정 모드 */
  const { id } = useParams();
  const navigate = useNavigate();

  /* fetch 변수 */
  const numbers = useFetch(`http://localhost:3001/numbers`);
  const lastNumber = numbers.length;

  /* 작성, 수정별 POST 내용 구분 */
  const [isModify, setIsModify] = useState(false);
  const [postData, setPostData] = useState(null);

  /* 고유 코드 생성 */
  function createUniqueCode() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /* 글 등록/수정 일시 생성 함수 */
  function dateToString(date) {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const hh = date.getHours();
    const mn = date.getMinutes();
    const ss = date.getSeconds();
    return `${yyyy}.${mm}.${dd} ${hh}:${mn}:${ss}`;
  }

  /* 수정 모드 글 데이터 불러오기 */
  useEffect(() => {
    if (id) {
      setIsModify(true);
      fetch(`http://localhost:3001/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPostData(data);
          if (title.current) title.current.value = data.title;
          if (content.current) content.current.value = data.content;
        });
    }
  }, [id]);

  /* 글 등록/수정 함수 */
  function submitPost(e) {
    e.preventDefault();

    const newPost = {
      title: title.current.value,
      content: content.current.value,
      date: new Date(),
      dateString: dateToString(new Date()),
    };

    if (isModify) {
      fetch(`http://localhost:3001/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...postData,
          ...newPost,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("글 수정 완료");
          navigate(`/view/${id}`);
        }
      });
    } else {
      fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: String(lastNumber + 1),
          code: createUniqueCode(),
          ...newPost,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("글 등록 완료");
          navigate(`/view/${lastNumber + 1}`);
        }
      });
      // 작성된 글 개수 기록 (글 삭제 시 url 겹침 방지)
      fetch(`http://localhost:3001/numbers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: lastNumber + 1,
        }),
      }).then((res) => res.json());
    }
  }

  /* 글 작성/수정 취소 */
  function writeCancel() {
    if (
      window.confirm(
        "글 작성이 완료되지 않았습니다. 작성을 취소하고 돌아갈까요?"
      )
    ) {
      navigate(-1);
    }
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
          <button
            className="btn_style btn_del"
            type="button"
            onClick={writeCancel}
          >
            취소
          </button>
          <button className="btn_style btn_sbm">저장</button>
        </div>
      </form>
    </div>
  );
}

export default Write;
