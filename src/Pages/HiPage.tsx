import React from "react";
import welcome from "/images/welcome.png";
import prompt2 from "/images/prompt2.png";
import next from "/images/next.png";
import back from "/images/back.png";
import backSound from "/audio/click-button-140881.mp3";
import nextSound from "/audio/click-button-140881.mp3";
import { useNavigate } from "react-router-dom";

const HiPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio(nextSound);
    audio.play();
    navigate("/Page3");
  };

  const handleClick1 = () => {
    const audio = new Audio(backSound);
    audio.play();
    navigate("/");
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img src={welcome} className="h-full w-full object-cover" />

      <img
        src={prompt2}
        className="absolute top-10 left-1/3 m-4 w-60 h-40 md:left-1/2 md:top-0 md:h-52 md:w-80 float-animation"
      />

      <img
        src={next}
        className="absolute top-3/4 left-2/3 w-40 md:left-3/4 md:top-3/4 md:mt-16 float-animation transition duration-100 transform hover:scale-110 hover:animate-none "
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />

      <img
        src={back}
        className="absolute top-5 left-8 w-12 md:left-8 md:top-5 float-animation transition duration-100 transform hover:scale-110 hover:animate-none   "
        onClick={handleClick1}
        style={{ cursor: "pointer" }}
      />

      <audio src={backSound} preload="auto" />
      <audio src={nextSound} preload="auto" />
    </div>
  );
};

export default HiPage;
