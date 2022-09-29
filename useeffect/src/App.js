import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  // const [count, setCount] = useState(0);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // this useEffect() is executed for every single time function component renders
  // useEffect(() => {
  //   console.log("render");
  // });

  // this useEffect() executes when resourceType changes
  console.log('render');
  useEffect(() => {
    console.log("resource type changed");

    // this return is used to clean up previous state and then exeutes above code
    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);

  // this useEffect() executes whenever empty array changes but it never changes
  // console.log('render');
  // useEffect(() => {
  //   console.log('resource type changed');
  // },[]);

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => setItems(response.data))
  //     // .then((json) => setItems(json));
  // }, [resourceType]);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // // we need to remove the event listener whenever the app component is deleted otherwise it is hooked up and slow downs our app
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   console.log("Event listener called");
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          setResourceType("users");
        }}
      >
        users
      </button>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h3>{resourceType}</h3>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
    // <>{windowWidth}</>
  );
}

export default App;
