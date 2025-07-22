import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/View.css";

function View() {
  const { poId } = useParams();
  const post = useFetch(`http://localhost:3001/posts/${poId}`);
  const navigator = useNavigate();

  function deletePost() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/posts/${poId}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            alert("글 삭제 완료");
            navigator("/");
          }
        })
        .catch((error) => {
          alert("Error!");
        });
    }
  }

  return (
    <>
      <div className="view">
        <h4 className="title">{post.title}</h4>
        <pre className="content">{post.content}</pre>
      </div>
      <div className="btn_wrap">
        <button className="btn_style btn_del" onClick={deletePost}>
          삭제
        </button>
        <Link className="btn_style btn_mdf" to={`/modify/${poId}`}>
          수정
        </Link>
      </div>
    </>
  );
}

export default View;