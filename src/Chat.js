import { Avatar, IconButton, useEventCallback } from "@material-ui/core";
import React, { useEffect } from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MoreVert from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import { useState } from "react";
import Background_Image from "./images/Super.jpg";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("room")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  });

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    console.log("you typed >>>", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last message...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Test Name</span>
          Hey there
          <span className="timestamp">10:00 pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form className="chat__form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleChange} type="submit">
            Submit
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
