import styled from "styled-components";
import { IoPlayOutline } from "react-icons/io5";
import { RxShare1, RxClock } from "react-icons/rx";
import { TfiShare } from "react-icons/tfi";
import { CiMusicNote1 } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { TABLE_ARRAY } from "./Table_Array";
import { useApp } from "../App";
import { useState } from "react";
import { convertStoMs } from "../utils/helpers";

console.log(TABLE_ARRAY);
const Home = () => {
  const { toggle, isId, onPlay } = useApp();


  return (
    <>
      <OuterBox className="OuterBox">
        <div className="song_info flex flex-col justify-between p-10">
          <div className="flex flex-col gap-4 items-start text-white title_info">
            <h1 className="font-bold text-4xl">Monkey D. Luffy</h1>
            <p className="text-lg"> 143M Monthly listeners</p>
            <Button>Follow</Button>
          </div>
          <div className="song_controls flex justify-between">
            <div className="controls">
              <PlayButton>
                <IoPlayOutline />
              </PlayButton>
              <ShareButtons>
                <RxShare1 />
              </ShareButtons>
              <ShareButtons>
                <TfiShare />
              </ShareButtons>
            </div>
            <div className="followers flex gap-4 items-center text-white font-bold">
              <ImgButton></ImgButton>
              <p> 68k Followers </p>
            </div>
          </div>
        </div>
        <div className="songs_list_section">
          <table>
            <thead>
              <tr>
                <th>
                  <h1># Title</h1>
                </th>
                <th></th>
                <th></th>
                <th>
                  <button>
                    <CiMusicNote1 />
                  </button>
                </th>
                <th>
                  <button>
                    <BsEye />
                  </button>
                </th>
                <th>
                  <button>
                    <RxClock />
                  </button>
                </th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {TABLE_ARRAY.map((data, ind) => {
                return (
                  <tr key={data.id}>
                    <td>
                    <PlayPauseBtn
                        onClick={() => {
                          onPlay(data);
                          toggle({id:data.id, ind:ind});
                        }}
                      >
                        {data.id == isId ? data.pause : data.play}

                      </PlayPauseBtn>
                    </td>
                    <td>
                      <div>
                        <ListImg src={data.image} alt="" />
                      </div>
                    </td>
                    <td>
                      <div className="text-left">
                        <h1>{data.title}</h1>
                        <p className="text-sm">{data.artist}</p>
                      </div>
                    </td>
                    <td>
                      <p className="text-sm">{data.label}</p>
                    </td>
                    <td>
                      <p className="text-sm">{data.streams}</p>
                    </td>
                    <td>
                      <p className="text-sm">{convertStoMs(data.totalLength)}</p>
                    </td>
                    <td>
                      <ListButtonShare>{data.share}</ListButtonShare>
                    </td>
                    <td>
                      <ListButtonShare>{data.share2}</ListButtonShare>
                    </td>
                    <td>
                      <ListButtonShare>{data.more}</ListButtonShare>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </OuterBox>
    </>
  );
};

export default Home;

const OuterBox = styled.div`
  height: calc(100vh - calc(7rem + 4.5em));
`;
const Button = styled.button`
  background-color: rgba(16, 16, 18, 0.97);
  padding: 13px 50px;
  border-radius: 5px;
  margin-top: 5px;
`;

const PlayButton = styled.button`
  color: white;
  background-color: #3542c6;
  font-size: 25px;
  padding: 25px;
  border-radius: 50%;
`;
const ShareButtons = styled.button`
  color: white;
  color: black;
  padding: 15px;
  background-color: white;
  border-radius: 50%;
  margin-left: 20px;
`;
const ImgButton = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-image: url("profile.jpg");
  background-size: 49px 49px;
`;

const ListImg = styled.img`
  border-radius: 6px;
  width: 80px;
  height: 80px;
`;

const PlayPauseBtn = styled.button`
  border: 1px solid #373737;
  padding: 15px;
  border-radius: 50%;
  color: whitesmoke;

  &:hover {
    background-color: #3542c6;
    border: none;
  }
`;

const ListButtonShare = styled.button`
  border: 1px solid #373737;
  padding: 15px;
  border-radius: 50%;
  color: whitesmoke;

  &:hover {
    background-color: #3542c6;
    border: none;
  }
`;
