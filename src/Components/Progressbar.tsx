import styled from "styled-components";
import { SlVolume2 } from "react-icons/sl";
import { useApp } from "../App";
import Player from "./Player";

const Progressbar = () => {
  const ctx = useApp();
  console.log(ctx);

  const progress = {
    padding: "20px",
    height: "7rem",
    background:
      "linear-gradient(3deg, rgba(63,66,105,1) 1%, rgba(60,64,115,1) 4%, rgba(29,29,29,1) 23%)",
  };

  const info = {
    height: "100%",
    width: "20%",
  };

  return (
    <div
      style={progress}
      className="player flex gap-14 items-center text-white bottom-0 left-0 w-full"
    >
      {ctx.activeSong.totalLength > 0 ? (
        <div className="flex gap-14 items-center text-white bottom-0 left-0 w-full">
          <div style={info} className="info flex">
            <img src={ctx.activeSong.image} width="80px" alt="" />
            <div className="show ml-5">
              <h2>{ctx.activeSong.title}</h2>
              <p>{ctx.activeSong.artist}</p>
            </div>
          </div>
          

          <div className="backFord flex items-center gap-3">
            <div className="flex w-full">
              <Player />
            </div>
          </div>

          {/* <p>00:00</p>
            <ProgressConatiner>
              <ProgressLine></ProgressLine>
            </ProgressConatiner>
            <p>{convertStoMs(ctx.activeSong.length)}</p> */}

          <div className="flex items-center">
            <span>
              <SlVolume2 />
            </span>
            <VolumeConatiner>
              <VolumeRange></VolumeRange>
            </VolumeConatiner>
          </div>
        </div>
      ) : (
        <p>Click Play Button</p>
      )}
    </div>
  );
};

export default Progressbar;

// const ProgressConatiner = styled.div`
//   background-color: #3f3f3f;
//   border-radius: 5px;
//   width: 100%;
//   margin: 10px 7px;
//   height: 5px;
// `;
// const ProgressLine = styled.div`
//   background-color: #c3c3c3;
//   border-radius: 5px;
//   width: 50%;
//   height: 5px;
// `;
const VolumeConatiner = styled.div`
  background-color: #3f3f3f;
  border-radius: 5px;
  width: 100px;
  margin: 10px 8px;
  height: 5px;
`;
const VolumeRange = styled.div`
  background-color: #c3c3c3;
  border-radius: 5px;
  width: 60%;
  height: 5px;
`;
