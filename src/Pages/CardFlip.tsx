import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card1FrontData,
  Card2FrontData,
  Card1BackData,
  Card2BackData,
} from "../components/CardData";

import FlippableCard from "../components/FlippableCard";
import { CardData } from "../types";

import welcome from "/images/welcome.png";
import back from "/images/back.png";
import bananaLogo from "/images/bananalogo.png";
import backSound from "/audio/click-button-140881.mp3";
import Monkey from "/images/MonkeyImage.png";
import bgImage from "../../public/images/Final Rewards Screen.png";

const CardFlip: React.FC = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    const audio = new Audio(backSound);
    audio.play();
    navigate("/Page4");
  };

  const [flippedCards, setFlippedCards] = useState<
    { index: number; type: string }[]
  >([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [timeout, setTimeoutState] = useState<boolean>(false);
  const [timeOver, setTimeOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showMatchMessage, setShowMatchMessage] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setTimeoutState(true);
      setTimeOver(true);
    }
  }, [timeLeft]);

  const handleCardClick = (index: number, type: string) => {
    if (timeout || flippedCards.length >= 2) return;
    const newFlippedCards = [...flippedCards, { index, type }];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;
      if (
        firstCard.index === secondCard.index &&
        firstCard.type !== secondCard.type
      ) {
        const newMatchedCards = [...matchedCards, firstCard.index];
        setMatchedCards(newMatchedCards);
        setScore(score + 2);
        setShowMatchMessage(true);
        setTimeout(() => setShowMatchMessage(false), 500);

        if (newMatchedCards.length === Card1FrontData.length) {
          setGameWon(true);
        }
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const isMatched = (index: number) => matchedCards.includes(index);

  const isFlipped = (index: number, type: string) =>
    flippedCards.some((card) => card.index === index && card.type === type) ||
    isMatched(index);

  const handlePlayAgain = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setTimeLeft(30);
    setTimeoutState(false);
    setTimeOver(false);
    setScore(0);
    setGameWon(false);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src={welcome}
        alt="background"
        className="h-full w-full object-cover absolute inset-0 z-0"
      />
      <img
        src={back}
        alt="Overlay"
        className="absolute top-5 left-8 w-12 md:left-8 md:top-5 float-animation transition duration-100 transform hover:scale-110 hover:animate-none"
        onClick={handleClick1}
        style={{ cursor: "pointer" }}
      />
      <div className="absolute w-5/6 md:top-5 left-1/2 transform -translate-x-1/2 md:w/full max-w-md flex items-center">
        <div className="ml-16 h-4 bg-gray-200 w-full mr-2 rounded-xl">
          <div
            className="h-4 bg-yellow-500"
            style={{ width: `${(timeLeft / 30) * 100}%` }}
          ></div>
        </div>
        <div className="relative w-20 h-20 md:w-32 md:h-28">
          <img
            src={bananaLogo}
            alt="Banana Logo"
            style={{
              filter: `grayscale(${100 - (timeLeft / 30) * 100}%)`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="relative container mx-auto p-4 flex flex-col mt-16 md:flex-row z-10">
        <div className="grid grid-cols-3 ml-5 md:mb-20 md:ml-10 md:mt-16 relative">
          {Card1FrontData.map((card: CardData, index: number) => (
            <div key={`front1_${index}`} className="relative">
              <FlippableCard
                frontImg={card.img}
                backImg={Card1BackData[index].img}
                alt={`Card 1 ${index + 1}`}
                isMatched={isMatched(index)}
                isFlipped={isFlipped(index, "card1")}
                onClick={() => handleCardClick(index, "card1")}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 mt-16 ml-5 md:mb-20 md:ml-44 md:mt-16 relative">
          {Card2FrontData.map((card: CardData, index: number) => (
            <div key={`front2_${index}`} className="relative">
              <FlippableCard
                frontImg={card.img}
                backImg={Card2BackData[index].img}
                alt={`Card 2 ${index + 1}`}
                isMatched={isMatched(index)}
                isFlipped={isFlipped(index, "card2")}
                onClick={() => handleCardClick(index, "card2")}
              />
            </div>
          ))}
        </div>
      </div>
      {showMatchMessage && (
        <div className="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
          <div className="bg-transparent p-4 text-center">
            <h2 className="text-6xl font-extrabold text-orange-400 text-stroke-2 text-stroke-white">
              It's a match!
            </h2>
          </div>
        </div>
      )}
      {timeOver && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-[#FFF5D1] p-8 rounded-md shadow-md text-center">
            <h2 className="text-6xl font-bold mb-1">Game Over</h2>
            <p className="mb-4">Your time is up!</p>
            <img
              src={Monkey}
              className="h-36 w-36 mx-auto"
              alt="monkey image"
            />
            <h2 className="text-4xl py-4 font-semibold ">
              You've Earned {score} Bananas!
            </h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      {gameWon && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-[#FFF5D1] p-8 rounded-md shadow-md text-center">
            <h2 className="text-6xl font-bold mb-1">You Win!</h2>
            <p className="mb-4">Congratulations, you matched all the cards!</p>
            <img
              src={Monkey}
              className="h-36 w-36 mx-auto"
              alt="monkey image"
            />
            <h2 className="text-4xl py-4 font-semibold ">
              You've Earned {score} Bananas!
            </h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      <audio src={backSound} preload="auto" />
    </div>
  );
};

export default CardFlip;
