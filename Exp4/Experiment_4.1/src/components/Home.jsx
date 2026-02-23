import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Home() {
  const { setUser } = useContext(GlobalContext);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Home Page</h3>
      <button
        onClick={() => setUser("Shardul")}
        style={{
          padding: "8px 15px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Change User Name
      </button>
    </div>
  );
}

export default Home;
