import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import db from "./firebase";
import "./SidebarChat.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please Enter Name Chat Room");

    if (roomName) {
      db.collection("room").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat__info">
          <h2>{name}</h2>
          <p>Last Message is...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
