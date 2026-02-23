import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Navbar() {
  const { user, theme, toggleTheme } = useContext(GlobalContext);

  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#e0e0e0" : "#161b22",
      }}
    >
      <h2>Welcome, {user}</h2>
      <button
        onClick={toggleTheme}
        style={{
          padding: "8px 15px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Navbar;
