import React from "react";
import "../App.css";
import { BsArrowLeft } from "react-icons/bs";
import {
  RiHomeLine,
  RiPlayListAddLine,
  RiPlayListLine,
  RiPlayList2Fill,
} from "react-icons/ri";
import {
  MdOutlineSubscriptions,
  MdSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { SlMusicToneAlt } from "react-icons/sl";
import { GiFruitBowl } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const sidebarList = [
  {
    id: 1,
    label: "Home",
    icon: <RiHomeLine />,
    url: "/"
  },
  {
    id: 2,
    label: "Recently Played",
    icon: <RiPlayList2Fill />,
    url: "recent-played"
  },
  {
    id: 3,
    label: "Collections",
    icon: <SlMusicToneAlt />,
    url: "collections"
  },
  {
    id: 4,
    label: "Playlists",
    icon: <RiPlayListLine />,
    url: "playlists"
  },
  {
    id: 5,
    label: "Subscription",
    icon: <MdOutlineSubscriptions />,
    url: "subscription"
  },
  {
    id: 6,
    label: "Create PlayList",
    icon: <RiPlayListAddLine />,
    url: "create-playlist"
  },
  {
    id: 7,
    label: "My Fruits",
    icon: <GiFruitBowl />,
    url: "fruits"
  },
];

const Navbar = () => {
  return (
    <>
      <div className="navbar flex flex-col h-screen w-80 pt-8 px-10 ">
        {/* ----------------- first nav section ----------------------- */}
        <div className="mb-12">
          <div className="Logo text-center mb-5 text-white">
            <h2 className="font-bold text-base mb-4">Yoooo!</h2>
            <Link to="/"><Button>
              <BsArrowLeft style={{ fontSize: "20px" }} />{" "}
              <span className="ml-3 text-sm"> WEB APP </span>
            </Button>
            </Link>
          </div>

          <div className="first_nav_menu">
            <ul>
              {sidebarList.map((item) => {
                return (
                  <Link key={item.id} to={item.url}>
                  <Li >
                    {item.icon}
                    {item.label}
                  </Li>
                  </Link>
                );
              })}
              {/* <Li>
                <RiHomeLine />
                Home
              </Li>
              <Li>
                <RiPlayList2Fill />
                Recently Played
              </Li>
              <Li>
                <SlMusicToneAlt />
                Collections
              </Li>
              <Li>
                <RiPlayListLine />
                Playlists
              </Li>
              <Li>
                <MdOutlineSubscriptions />
                Subscription
              </Li>
              <Li>
                <RiPlayListAddLine />
                Create PlayList
              </Li>
              <Li>
                <GiFruitBowl />
                My Fruits
              </Li> */}
            </ul>
          </div>
        </div>

        {/* ----------------- second nav section ----------------------- */}

        <div className="second_nav_menu text-sm">
          <HR />
          <p className="text-gray-200 mb-5 ml-5 text-base">My Playlist #1</p>
          <ul>
            <Li>Christmas Tracks</Li>
            <Li>Other Remix</Li>
            <Li>Release Radar</Li>
          </ul>
        </div>

        {/* ----------------- third nav section ----------------------- */}
        <div className="Third_nav_menu my-auto">
          <HR />
          <ul>
            <Link to="settings"><Li>
              <MdSettings />
              Settings
            </Li></Link>
            
            <Link to="logout">
            <Li>
              <MdOutlineLogout />
              Log Out
            </Li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//-------------------------------------- styled component--------------------------------------

const Li = styled.li`
  display: flex;
  align-items: center;
  color: #545358;
  font-size: 16px;
  line-height: 2.6;
  gap: 1rem;
  padding-left: 20px;

  &:hover {
    background-color: #000000;
    color: whitesmoke;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: #3542c6;
  padding: 10px 25px;
  border: none;
  border-radius: 10px;
`;

const HR = styled.hr`
  border-color: #534d4d;
  margin-bottom: 3em;
`;
