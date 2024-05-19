import welcome from "/images/final.png";
import conatiner from "/images/container.png";
import back from "/images/back.png";
import { useNavigate } from "react-router-dom";
import backSound from "/audio/click-button-140881.mp3";

const FinalRewards = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    const audio = new Audio(backSound);
    audio.play();
    navigate("/Page4");
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={welcome}
        alt="background"
        className="h-full w-full object-cover absolute inset-0 z-0"
      />

      <div className="absolute top-14 left-16 w-80 md:w-96 md:left-1/3 md:ml-14">
        <img src={conatiner} alt="Overlay" />
        <p className="absolute mt-12 top-1/2 md:mt-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold text-xl text-center">
          You earned bananas!
        </p>
      </div>
      <img
        src={back}
        alt="Overlay"
        className="absolute top-5 left-8 w-12 md:left-8 md:top-5 float-animation transition duration-100 transform hover:scale-110 hover:animate-none"
        onClick={handleClick1}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default FinalRewards;
