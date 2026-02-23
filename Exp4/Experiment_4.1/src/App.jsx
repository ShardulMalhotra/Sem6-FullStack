import { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      style={{
        minHeight: "100%",
        backgroundColor: theme === "light" ? "#f4f6f8" : "#0d1117",
        color: theme === "light" ? "#000" : "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
