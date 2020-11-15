import { Avatar, useEventCallback } from "@material-ui/core";
import React, { useEffect } from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import "./Chat.css";
import { useState } from "react";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random * 5));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar scr={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Test Room</h3>
          <p>Last message...</p>
        </div>
        <div className="chat__headerRight"></div>
        <SearchOutlined />
        <AttachFile />
        <MoreVert />
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
