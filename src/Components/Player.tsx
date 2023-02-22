import React, { useEffect, useRef, useState } from 'react';
import { RxShuffle } from "react-icons/rx";
import { MdReplay } from "react-icons/md";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { TfiControlSkipForward, TfiControlSkipBackward } from "react-icons/tfi";
import { useApp } from '../App';
import { convertStoMs } from '../utils/helpers';
import { idText } from 'typescript';

const Player = () => {
  const ctx = useApp()

  const [current, setCurrent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0)
  const [loading, setLoading] = useState(false);

  const audioRef = useRef<any>(null)


  useEffect(() => {
    // console.log(audioRef.current.paused)
    if (ctx.playing) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
  }, [ctx.playing, ctx.activeSong.id])

  


  return (
    <>

      <div className="audio"
        style={{ display: "none", position: 'absolute', opacity: 0, zIndex: -1 }}
      >

        {/* {loading ? "T" : "F"} */}
        <audio controls key={ctx.activeSong.id} onLoadStart={() => {
          setLoading(true)
        }} onLoadedMetadata={(e: any) => {
          setLoading(false);
          setTotalDuration(e.target.duration)

        }} onTimeUpdate={(e: any) => {
          setCurrent(e.target?.currentTime)
        }} ref={audioRef} >
          <source src={ctx.activeSong.mp3} type="audio/mpeg" />
        </audio>
      </div>
      <div className='flex items-center gap-6'>
        <div className="flex items-center gap-6">
          <span className="text-xl text-gray-200">
            <button>
              <RxShuffle />
            </button>
          </span>
          <span className="text-2xl text-gray-300">
            <button>
              <TfiControlSkipBackward />
            </button>
          </span>
          <span className="text-3xl text-gray-300">
            <button onClick={() => {
              ctx.setPlaying(s => !s);
              ctx.toggle(ctx.activeSong.id)
            }} >
              {ctx.playing ? (<CiPlay1 />) : (<CiPause1 />)}
            </button>
          </span>
          <span className="text-2xl text-gray-300">
            <button>
              <TfiControlSkipForward />
            </button>
          </span>
          <span className="text-2xl text-gray-300">
            <button>
              <MdReplay />
            </button>
          </span>
        </div>
        <div className="flex gap-2 playerMainDiv">
          <p>{convertStoMs(current)} </p>
          <input type="range" value={current} max={totalDuration} step="0.01" name="slider" onChange={(e) => {
            // sound.seek([e.target.value]);
            // console.log("E", e.target.value)
            audioRef.current.currentTime = e.target.value
          }} />
          <p>{convertStoMs(totalDuration)}</p>
        </div>
      </div>
    </>
  )
}

export default Player;