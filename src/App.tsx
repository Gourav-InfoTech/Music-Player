import React, { useContext } from "react";
import { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./Components/Appbar";
import Progressbar from "./Components/Progressbar";
import Home from "./Components/Home";
import Collections from "./Pages/Collections";
import CreatePlaylist from "./Pages/CreatePlaylist";
import MyFruits from "./Pages/MyFruits";
import Playlists from "./Pages/Playlists";
import RecentlyPlayed from "./Pages/RecentlyPlayed";
import Subscriptions from "./Pages/Subscriptions";
import Settings from "./Pages/Settings";
import Logout from "./Pages/Logout";

const Context = createContext<{
  activeSong: any;
  onPlay: (s: any) => any;
  toggle: ({s,n}: any) => any;
  // togglePlay: () => any;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  playing: Boolean,
  isId: number,
  setId: React.Dispatch<React.SetStateAction<number>>,
  savedId: number,
}>({
  activeSong: {},
  onPlay: () => { },
  setPlaying: () => { },
  toggle: ({id,ind}) => { },
  // togglePlay: () => { },
  playing: false,
  isId: 0,
  setId: () => { },
  savedId: 0,
});

export function useApp() {
  return useContext(Context);
}


const App = () => {
  const [activeSong, setActiveSong] = useState({});
  const [playing, setPlaying] = useState(true);
  const [isId, setId] = useState(0);
  const [savedId, setSavedId] = useState(0);



  const toggle = ({ id, ind }: any) => {

    if (id === ind + 1) {
      setId(id);
      setSavedId(id);
      setPlaying(false)
    }
    if (id === ind + 1 && isId == id) {
      setId(0);
      setPlaying(true)
    }

  };

  const onPlay = (song: any) => {
    setActiveSong(song);
  };

  return (
    <>
      <Context.Provider value={{ activeSong, onPlay, setPlaying, playing, toggle, isId, setId, savedId }}>
        <BrowserRouter>
          <div className="wholeSection">
            <div className="flex flex-row">
              <div className="sidebarSection">
                <Navbar />
              </div>

              <div className="content_appbar">
                <Appbar />
                <div className="OuterBox">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recent-played" element={<RecentlyPlayed />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route path="/subscription" element={<Subscriptions />} />
                    <Route
                      path="/create-playlist"
                      element={<CreatePlaylist />}
                    />
                    <Route path="/fruits" element={<MyFruits />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/logout" element={<Logout />} />
                  </Routes>
                </div>
              </div>
            </div>
            {/* { Object.keys(activeSong).length > 0 && <Progressbar /> } */}<Progressbar />
          </div>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
};

export default App;
