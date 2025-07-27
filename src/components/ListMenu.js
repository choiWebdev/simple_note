import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/ListMenu.css";

function ListMenu({ id }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function deletePost() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            alert("글 삭제 완료");
            Navigate("/");
          }
        })
        .catch((error) => {
          alert("Error!");
        });
    }
  }

  return (
    <div className="list_menu">
      <div className="open_menu" onClick={toggleMenu}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <nav className={`menu ${isMenuOpen ? "show" : ""}`}>
        <Link className="btn_menu" to={`/modify/${id}`}>
          수정하기
        </Link>
        <button className="btn_menu" type="button" onClick={deletePost}>
          삭제하기
        </button>
      </nav>
    </div>
  );
}

export default ListMenu;
