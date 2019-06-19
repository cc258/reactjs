import React, { useState, useEffect } from "react";

export default function Websocket() {
  const [msg, setMsg] = useState();
  const [text, setText] = useState("");

  const websocket = new WebSocket("wss://www.qvdv.com/Websocket");
  websocket.onerror = function() {
    console.log("websocket error");
  };
  websocket.onopen = function() {
    console.log("websocket connect success");
  };
  websocket.onmessage = function(event) {
    console.log("websocket data:", event.data);
    setMsg(event.data);
  };
  //   websocket.onclose = function() {
  //     console.log("websocket close");
  //   };
  //   websocket.onbeforeunload = function() {
  //     websocket.close();
  //   };

  function handChangeText(e) {
    setText(e.target.value);
  }
  function handSendWebsocket() {
    websocket.send(text);
  }

  return (
    <div className="pages">
      <div>Websocket</div>
      <div>WebChat</div>
      <input onChange={handChangeText} />
      <button onClick={handSendWebsocket}>send</button>
      <ul>
        <li>{msg}</li>
      </ul>
    </div>
  );
}
