import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";

function App() {
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
