import React, { useState, useEffect } from "react";

export default function Websocket() {
  const [msg, setMsg] = useState("");
  const [txt, setTxt] = useState("");
  const socket = new WebSocket("ws://localhost:7080");

  useEffect(() => {
    console.log("【client】", socket);
    socket.onerror = function() {
      console.log("【client】websocket error");
    };
    socket.onopen = function() {
      console.log("websocket connect success");
      // socket.send("【client】hello websocket");
    };
    socket.onmessage = function(event) {
      console.log("【client】websocket data:", event);
      setMsg(event.data);
    };
    socket.onclose = function() {
      console.log("【client】websocket close");
    };

    socket.onbeforeunload = function() {
      websocket.close();
    };
  }, [msg]);

  function handChangeTxt(e) {
    setTxt(e.target.value);
  }
  function handSendWebsocket() {
    if (socket.OPEN) {
      console.log("【client】socket.OPEN: ", socket.OPEN);
      socket.send(txt);
    } else {
      console.log("【client】", socket);
    }
  }

  return (
    <div className="pages">
      <div>Websocket</div>
      <div>WebChat</div>
      <input onChange={handChangeTxt} />
      <button onClick={handSendWebsocket}>send</button>
      <ul>
        <li>{msg}</li>
      </ul>
    </div>
  );
}
