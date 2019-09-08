import React, { useEffect, FC } from "react";
import Axios from "axios";
// import G2 from "@antv/g2";

export default function Mongoose() {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="pages">
      <h3>注册</h3>
      <ul>
        <li>
          name: <input type="text" />
        </li>
        <li>
          name: <input type="text" />
        </li>
        <li>
          name: <input type="text" />
        </li>
        <li>
          name: <input type="text" />
        </li>
        <li>
          name: <input type="text" />
        </li>
      </ul>
      <button onClick={handRegister}>Register</button>
    </div>
  );

  function getUsers() {
    Axios.get("/test/user/users");
  }

  function handRegister() {
    Axios.post("/test/user/add");
  }
}
