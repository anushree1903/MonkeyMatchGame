import React from "react";
import welcome from "/images/welcome.png";
import prompt from "/images/prompt.png";
import start from "/images/start.png";
import startSound from "/audio/click-button-140881.mp3";
import { useNavigate } from "react-router-dom";

const WelcomeKiddo: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio(startSound);
    audio.play();
    navigate("/Page2");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={welcome}
        alt="monkey BG"
        className="h-full w-full object-cover"
      />
      <img
        src={prompt}
        alt="Overlay"
        className="absolute top-0 left-1/6 m-4 h-40 w-50 md:left-1/2 float-animation"
      />
      <img
        src={start}
        alt="Overlay"
        className="absolute top-3/4 left-2/3 w-40 md:left-3/4 md:top-3/4 md:mt-10 float-animation transition duration-100 transform hover:scale-110 hover:animate-none"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <audio src={startSound} preload="auto" />
    </div>
  );
};

export default WelcomeKiddo;
