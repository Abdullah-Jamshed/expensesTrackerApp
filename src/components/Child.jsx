import { useContext, useReducer } from "react";
import contextReducer from "./contextReducer";

const Child = (props) => {
  let [state, dispatch] = useReducer(contextReducer, 0);
  console.log(state);
  return (
    <div>
      <h2>Counter Value : {state}</h2>
      <button onClick={() => dispatch("INCREAMENT")}>Increament</button>
      <button onClick={() => dispatch("DECREAMENT")}>Decreament</button>
    </div>
  );
};

export default Child;
