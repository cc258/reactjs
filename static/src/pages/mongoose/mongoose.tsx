import React, { useEffect, useState } from "react";
import Axios from "axios";
// import G2 from "@antv/g2";

export default function Mongoose() {
  const [stars, setStar] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  useEffect(() => {
    getStars();
  }, []);

  return (
    <div className="pages">
      <h3>注册</h3>
      <ul>
        <li>
          name
          <input
            type="text"
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </li>
        <li>
          age
          <input
            type="text"
            onChange={e => {
              setAge(e.target.value);
            }}
          />
        </li>
      </ul>
      <div>{stars}</div>
      <button onClick={addStars}>ADD</button>
      <button onClick={updateStars}>UPDATE</button>
      <button onClick={DeleteStars}>DELETE</button>
    </div>
  );

  function getStars() {
    Axios.get("/api/star").then(res => {
      const data = res.data;
      setStar(JSON.stringify(data));
    });
  }
  function addStars() {
    Axios.post("/api/star/add", { name, age }).then(() => {
      getStars();
    });
  }
  function updateStars() {
    Axios.post("/api/star/update", { name, age }).then(() => {
      getStars();
    });
  }
  function DeleteStars() {
    Axios.post("/api/star/del", { name, age }).then(() => {
      getStars();
    });
  }
}
