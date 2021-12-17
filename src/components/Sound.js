import React from "react";
import { Howl, Howler } from "howler";

import Coldplay from "../audio/Coldplay - Fix You (Official Video).mp3";
import Passenger from "../audio/Passenger _ Let Her Go (Official Video).mp3";
import Laura from "../audio/Laura Pausini  Eros Ramazzotti.volare cantare.mp3";
import Kenny from "../audio/Kenny Rogers - Lady (Audio).mp3";

const Sounds = () => {
  const audioClips = [
    { Sound: Coldplay, label: "Fix You" },
    { Sound: Passenger, label: "Let her go" },
    { Sound: Laura, label: "Volare Cantare" },
    { Sound: Kenny, label: "Lady" },
  ];

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const playMusic = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button
          className="btn"
          style={{
            padding: "0.5rem",
            margin: "1rem",
            borderRadius: "0.5rem",
          }}
          key={index}
          onClick={() => soundPlay(soundObj.Sound)}
        >
          {soundObj.label}
        </button>
      );
    });
  };
  Howler.volume(0.5);

  return (
    <div>
      <h1>Sound clips</h1>
      {playMusic()}
    </div>
  );
};

export default Sounds;
