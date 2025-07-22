import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";
import Write from "./components/Write";
import View from "./components/View";
import ErrorPage from "./components/ErrorPage";

function App() {
  /* 다크 모드 */
  const [isDarkMode, setIsDarkMode] = useState(false);
  const htmlElement = document.documentElement;

  function toggleMode() {
    isDarkMode
      ? htmlElement.classList.remove("dark_mode")
      : htmlElement.classList.add("dark_mode");
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header tossToggleMode={toggleMode} />
      <div className="App_body">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/write" element={<Write />} />
          <Route path="/modify/:id" element={<Write />} />
          <Route path="/view/:poId" element={<View />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
