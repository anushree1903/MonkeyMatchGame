import React from "react";
import welcome from "/images/welcome.png";
import prompt3 from "/images/prompt3.png";
import yes from "/images/yes.png";
import back from "/images/back.png";
import backSound from "/audio/click-button-140881.mp3";
import yesSound from "/audio/click-button-140881.mp3";
import { useNavigate } from "react-router-dom";

const Help: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio(yesSound);
    audio.play();
    navigate("/Page4");
  };

  const handleClick1 = () => {
    const audio = new Audio(backSound);
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
        src={prompt3}
        alt="Overlay"
        className="absolute top-10 left-1/3 m-4 w-64 h-40 md:left-1/2 md:top-0 md:h-52 md:w-80 float-animation"
      />
      <img
        src={yes}
        alt="Overlay"
        className="absolute top-3/4 left-2/3 w-40 md:left-3/4 md:top-3/4 md:mt-16 float-animation transition duration-100 transform hover:scale-110 hover:animate-none"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <img
        src={back}
        alt="Overlay"
        className="absolute top-5 left-8 w-12 md:left-8 md:top-5 float-animation transition duration-100 transform hover:scale-110 hover:animate-none "
        onClick={handleClick1}
        style={{ cursor: "pointer" }}
      />
      <audio src={backSound} preload="auto" />
      <audio src={yesSound} preload="auto" />
    </div>
  );
};

export default Help;
