import React from 'react'
import Search from "./Search";
import Note from "./Note";
import "../styles/List.css";

function List() {
  return (
    <div className="list">
      <Search />
      <div className="note_list">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  )
}

export default List
