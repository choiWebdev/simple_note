import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  let darkMode = isDarkMode ? "dark_mode" : "";
  function toggleMode() {
    setIsDarkMode(!isDarkMode);
  }
  useEffect(() => {
    console.log(isDarkMode);

  }, [isDarkMode]);
  return (
    <div className={`App ${darkMode}`}>
      <Header tossToggleMode={toggleMode} />
    </div>
  );
}

export default App;
