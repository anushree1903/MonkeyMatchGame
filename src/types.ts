export interface ImgProps {
  img: string;
  alt: string;
}

export interface FlippableCardProps {
  frontImg: string;
  backImg: string;
  alt: string;
  isMatched: boolean;
  isFlipped: boolean;
  onClick: () => void;
}

export interface CardData {
  img: string;
}