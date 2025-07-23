import React, { useMemo, useState } from "react";
import "../styles/List.css";
import useFetch from "../hooks/useFetch";
import Search from "./Search";
import Note from "./Note";
import Footer from "./Footer";
import NoPost from "./NoPost";

function List() {
  const allPosts = useFetch(
    `http://localhost:3001/posts?_sort=number&_order=asc`
  );
  const [search, setSearch] = useState();

  // 필터링 함수로 상태 변경 > 상태 배열을 map으로 반복해서 Note 뿌리기

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

  if (!allPosts || (allPosts.length === 0 && search === "")) {
    return <p>Loading...</p>;
  }

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
