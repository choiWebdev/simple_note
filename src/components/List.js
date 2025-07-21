import React from "react";
import Search from "./Search";
import Note from "./Note";
import Footer from "./Footer";
import "../styles/List.css";
import useFetch from "../hooks/useFetch";

function List() {
  const posts = useFetch(`http://localhost:3001/posts`);
  return (
    <>
      <div className="list">
        <Search />
        <div className="note_list">
          {posts.map((post) => {
            return (
              <Note
                poTit={post.title}
                poCon={post.content}
                poId={post.id}
                poNum={post.number}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default List;
