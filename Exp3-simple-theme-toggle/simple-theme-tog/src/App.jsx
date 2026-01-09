import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <h1>Theme Toggle SPA</h1>
      <p>{darkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}</p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;