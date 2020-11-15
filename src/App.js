import logo from "./logo.svg";
import "./app.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
