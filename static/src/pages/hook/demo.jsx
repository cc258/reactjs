import React, { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import ThemeContext from "./theme.jsx";
import { actions } from "../todo/todos.reducer";

const reducer = (state, action) => {
  switch (action.type) {
    case "getRightPoint":
      return { ...state, ajax: action.data };
    case "increment":
      return { ...state, count: action.count };
    // case "decrement":
    //   return { ...state };
    // case "reset":
    //   return { ...state };
    default:
      throw new Error("Unexpected action");
  }
};

export default function Demo() {
  const [state, dispatch] = useReducer(reducer);

  const [stars, setStars] = useState(0);

  const cName = useName();
  const eName = useName();
  const width = useResize();

  const theme = useContext(ThemeContext);

  function onStars() {
    setStars(stars + 10);
  }

  function getRightPoint() {
    axios
      .get("http://localhost:8090/getdata", {
        params: {
          id: 12345
        }
      })
      .then(res => {
        const data = res.data;
        dispatch({ type: "getRightPoint", data });
      });
  }

  return (
    <section className={theme}>
      <h1 onClick={onStars}>
        {cName.value} / {eName.value} counts {stars} stars
      </h1>
      <h4>window width: {width}px</h4>
      <div>
        <label>
          Chinese name
          <input {...cName} />
        </label>
      </div>
      <div>
        <label>
          English name
          <input {...eName} />
        </label>
      </div>

      <h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </h3>
      <button onClick={getRightPoint}>getRightPoint</button>
      <button onClick={() => dispatch({ type: "increment", count: 0 })}>
        +1
      </button>
      {/* <button onClick={() => dispatch("decrement")}>-1</button>
      <button onClick={() => dispatch("reset")}>reset</button> */}
    </section>
  );
}
// cumston hooks
function useName() {
  const [name, setName] = useState();
  function onName(e) {
    setName(e.target.value);
  }
  return { value: name, onChange: onName };
}

// cumston hooks
function useResize() {
  const [width, setWidth] = useState(0);

  function onResize() {
    const winWidth = window.innerWidth;
    setWidth(winWidth);
  }

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return width;
}
