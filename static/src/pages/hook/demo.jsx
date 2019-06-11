import React, { useState, useContext, useEffect } from "react";
import ContextTheme from "./context-theme";

export default function Demo(props) {
  const count = useCountNum(0);
  const cName = useNameValue("Chuang");
  const eName = useNameValue("Leo");
  const width = useResizeWidth();

  const theme = useContext(ContextTheme);

  return (
    <section>
      <div>
        You count {count.value} stars
        <button {...count}>Count</button>
      </div>
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
      <h1>{theme.guangzhou}</h1>
      <p>{width}</p>
      <small>
        {count.value} / {cName.value} / {eName.value} / {theme.guangzhou}/{" "}
        {theme.night}
      </small>
    </section>
  );
}

function useCountNum(v) {
  const [count, setCount] = useState(v);
  const handCount = () => {
    setCount(count + 1);
  };

  return {
    value: count,
    onClick: handCount
  };
}

function useNameValue(v) {
  const [value, setValue] = useState(v);
  const handChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handChange
  };
}

// Custom hook
function useResizeWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const handResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handResize);
    return () => {
      window.removeEventListener("resize", handResize);
    };
  });

  return width;
}
