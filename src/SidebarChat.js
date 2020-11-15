import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import "./SidebarChat.css";

function SidebarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarchat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarchat__info">
        <h2>Test Name</h2>
        <p>Last Message is...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
