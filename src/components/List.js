import React, { useMemo, useState } from "react";
import "../styles/List.css";
import useFetch from "../hooks/useFetch";
import Search from "./Search";
import Note from "./Note";
import Footer from "./Footer";
import NoPost from "./NoPost";

function List() {
  const allPosts = useFetch(`http://localhost:3001/posts?_sort=-date`);
  const [search, setSearch] = useState();

  const filteringPosts = useMemo(() => {
    if (!search) return allPosts;
    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );
  }, [allPosts, search]);

  const handleSearch = (note) => {
    setSearch(note);
  };

  return (
    <>
      <div className="list">
        <Search onSearch={handleSearch} />
        <div className="note_list">
          {allPosts && allPosts.length === 0 ? (
            <NoPost />
          ) : (
            filteringPosts.map((post) => {
              return (
                <Note
                  title={post.title}
                  content={post.content}
                  id={post.id}
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
