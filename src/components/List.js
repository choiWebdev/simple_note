import React from "react";
import "../styles/List.css";
import useFetch from "../hooks/useFetch";
import Search from "./Search";
import Note from "./Note";
import Footer from "./Footer";
import NoPost from "./NoPost";

function List() {
  const posts = useFetch(`http://localhost:3001/posts`);

  return (
    <>
      <div className="list">
        <Search />
        <div className="note_list">
          {posts && posts.length === 0 ? (
            <NoPost />
          ) : (
            posts.map((post) => {
              return (
                <Note
                  poTit={post.title}
                  poCon={post.content}
                  poId={post.id}
                  key={post.code}
                />
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default List;
