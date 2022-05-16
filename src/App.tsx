import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./../src/components/MainBody/MainBody.css";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import ProfileCard from "./components/Base/ProfileCard/ProfileCard";
import DiscoverCard from "./components/Base/DiscoverCard/DiscoverCard";
import userAvatar from "./../src/assets/png/admin.png";
import blackMessageIcon from "./../src/assets/png/blackMessage.svg";
import noteIcon from "./../src/assets/png/note.svg";

function App() {
  return (
    <div className="App">
      <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
      <script src="https://npmcdn.com/moralis/dist/moralis.js"></script>
      <Header />
      <div className="c-mobileHeader">
        <div className="c-mobileSearchContainer">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={userAvatar} className="c-mobileAvatar" />
            <div className="mobileSearchInputRoot">
              <i className="fas fa-search searchIcon"></i>
              <input
                type="text"
                className="
                inputContainer
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding

                border-transparent
                rounded
                transition
                ease-in-out
                m-0
                 focus:outline-none
            "
                id="exampleFormControlInput1"
                placeholder="Example label"
              />
            </div>
          </div>

          <img src={blackMessageIcon} className="c-blackMessageIcon" />
        </div>
        <div className="c-talkInputContainer">
          <img src={noteIcon} />
          <input
            type="text"
            className="
                talkInput
                form-control
                block
                w-full
                
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding

                border-transparent
                rounded
                transition
                ease-in-out
                m-0
                 focus:outline-none
            "
            id="exampleFormControlInput1"
            placeholder="What do you want to talk about?"
          />
        </div>
      </div>
      <div className="c-space"></div>
      <div className="c-standardRoot">
        <div>
          <ProfileCard
            connectionCnt={51}
            followerCnt={25}
            className="c-profileCard"
          />
          <DiscoverCard />
        </div>
      </div>
      <MainBody />
    </div>
  );
}

export default App;
