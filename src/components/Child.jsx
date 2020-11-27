import { useContext, useReducer } from "react";
// import contextCounter from "./contextCounter";
import contextReducer from "./contextReducer";

const Child = (props) => {
  //   let contextValue = useContext(contextCounter);
//   console.log(contextValue);

let [state, dispatch] = useReducer(contextReducer, 0);
  console.log(state);
  return (
    <div>
      {/* <h2>Counter Value : {contextValue[0]}</h2>
      <button onClick={()=>contextValue[1](++contextValue[0])}>Increament</button>
      <button onClick={()=>contextValue[1](--contextValue[0])}>Decreament</button> */}

      <h2>Counter Value : {state}</h2>
      <button onClick={() => dispatch("INCREAMENT")}>Increament</button>
      <button onClick={() => dispatch("DECREAMENT")}>Decreament</button>
    </div>
  );
};

export default Child;
