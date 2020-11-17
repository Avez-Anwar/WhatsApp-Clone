import React, { useEffect } from "react";
import Avatar from "@material-ui/core/avatar";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Sidebar.css";
import { IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import { useState } from "react";
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("room").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chat">
        <SidebarChat addNewChat />

        {rooms.map((rooms) => (
          <SidebarChat key={rooms.id} id={rooms.id} name={rooms.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
