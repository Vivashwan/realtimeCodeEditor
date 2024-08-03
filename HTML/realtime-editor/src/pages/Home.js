import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = v4();

    setRoomId(id);

    toast.success("New room created");
  };

  const joinRoom = () =>{
    if(!roomId || !username)
    {
        toast.error("Both fields are required");
        return;
    }

    navigate(`/editor/${roomId}`,{
        state:{
            username,
        }
    });
  };

  const handleInputEnter = (e) =>{
    if(e.code === 'Enter')
    {
        joinRoom();
    }
  }

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="./CodeEditor.png"
          alt="App Logo"
        />
        <h4 className="mainLabel">Paste Invitation Room ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Enter Room ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then, create{" "}
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
