import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
      }}
    >
      <h2>Redux Counter Application</h2>
      <h1 style={{ fontSize: "48px", margin: "20px 0" }}>{count}</h1>

      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(reset())}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
