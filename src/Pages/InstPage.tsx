import React from "react";
import bg from "/images/bg.png";
import inst1 from "/images/inst1.png";
import inst2 from "/images/inst2.png";
import inst3 from "/images/inst3.png";
import back from "/images/back.png";
import play from "/images/play.png";
import line from "/images/line.png";
import backSound from "/audio/click-button-140881.mp3";
import playSound from "/audio/click-button-140881.mp3";
import { useNavigate } from "react-router-dom";

const InstPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const audio = new Audio(playSound);
    audio.play();
    navigate("/Page5");
  };

  const handleClick1 = () => {
    const audio = new Audio(backSound);
    audio.play();
    navigate("/Page3");
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img src={bg} className="h-full w-full object-cover absolute" />
      <img
        src={line}
        className=" w-1/2 object-cover absolute left-1/3 top-1/3 "
      />

      <div className="relative container mx-auto p-4 h-screen flex flex-col overflow-scroll  items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-center  ">
        <img src={inst1} className="w-3/4 md:w-96 animate-float-up" />
        <img src={inst2} className="w-3/4 md:w-96 animate-float-down " />
        <img src={inst3} className="w-3/4 md:w-96 animate-float-up" />
      </div>
      <img
        src={back}
        className="absolute top-5 left-8 w-12 md:left-8 md:top-5 float-animation transition duration-100 transform hover:scale-110 hover:animate-none"
        onClick={handleClick1}
        style={{ cursor: "pointer" }}
      />
      <img
        src={play}
        className="absolute bottom-2 left-1/2 ml-14 w-40 md:left-3/4 md:top-3/4 md:mt-14 float-animation transition duration-100 transform hover:scale-110 hover:animate-none"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <audio src={backSound} preload="auto" />
      <audio src={playSound} preload="auto" />
    </div>
  );
};

export default InstPage;
