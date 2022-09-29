import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => 7);
  const [theme, setTheme] = useState(() => {
    return "black";
  });
  // const [state, setState] = useState(() => {
  //   return {
  //     count: 7,
  //     theme: "black",
  //   };
  // });
  // const count = state.count;
  // const theme = state.theme;

  const incrementCount = () => {
    // setCount(count+1);
    setCount((prevCount) => prevCount + 1);
    // setState((prevState) => {
    //   return {
    //     ...prevState,
    //     count: prevState.count + 1,
    //   };
    // });
  };

  const decrementCount = () => {
    // setCount(count-1);
    setCount((prevCount) => prevCount - 1);
    // setState((prevState) => {
    //   return {
    //     ...prevState,
    //     count: prevState.count - 1,
    //   };
    // });
  };

  const changeTheme = () => {
    setTheme("blue");
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          changeTheme();
          decrementCount();
        }}
      >
        -
      </button>
      <span>{count}</span>
      <span>{theme}</span>
      <button
        onClick={() => {
          incrementCount();
          changeTheme();
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
