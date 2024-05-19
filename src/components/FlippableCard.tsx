import React from "react";
import { ImgProps, FlippableCardProps } from "../types";

const Card: React.FC<ImgProps> = ({ img, alt }) => {
  return <img src={img} alt={alt} className="w-24 md:w-5/6 md:mb-0" />;
};

const FlippableCard: React.FC<FlippableCardProps> = ({
  frontImg,
  backImg,
  alt,
  isMatched,
  isFlipped,
  onClick,
}) => {
  const handleClick = () => {
    if (!isMatched && !isFlipped) {
      onClick();
    }
  };

  return (
    <div className={`relative ${isMatched ? "grayscale" : ""}`} onClick={handleClick}>
      <div className={`transform ${isFlipped ? "rotate-y-180 transition-all duration-300 ease-in-out" : ""} transition-transform`}>
        <Card img={isFlipped ? backImg : frontImg} alt={alt} />
      </div>
    </div>
  );
};

export default FlippableCard;
