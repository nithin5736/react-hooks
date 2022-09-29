// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const prevName = useRef(''); // refs are used to store previous values
//   // const inputRef = useRef("");
//   // const [renderCount,setRenderCount]=useState(0);
//   // const renderCount = useRef(1); // useRef does not rerenders the component again when it is updated

//   // useEffect(()=>{
//   //   // This set the state and rerenders again and again and so on.Here,useState causes infinite loop
//   //   // setRenderCount(prevCnt => prevCnt + 1);
//   //   renderCount.current = renderCount.current + 1;
//   // })

//   // const focus = () => {
//   //   inputRef.current.focus();
//   //   inputRef.current.value = "Hi";
//   // };

//   useEffect(() => {
//     prevName.current = name;
//   },[name])

//   return (
//     <>
//       <input
//         type="text"
//         // ref={inputRef}
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <h6>My name is {name} and previously it was {prevName.current}</h6>
//       {/* <button onClick={focus}>Focus</button> */}
//       {/* <h5>I rendered {renderCount} times</h5> */}
//       {/* <h5>I rendered {renderCount.current} times</h5> */}
//     </>
//   );
// }

// export default App;

import React, { useRef,useEffect } from "react";

const App = () => {
  const data = useRef('');

  useEffect(() => {
    data.current.focus();
  })

  const submitHandler = () => {
    console.log(data.current.value);
  }

  return <div>
    <form onSubmit={submitHandler}>
      <input type="text" ref={data} />
      <button type="submit">Submit</button>
    </form>
  </div>;
};

export default App;
