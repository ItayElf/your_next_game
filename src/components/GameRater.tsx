import { useState } from "react";
import { BASE_URL } from "../configuration";
import Loading from "./theme/Loading";
import PrimaryButton from "./theme/PrimaryButton";

interface Props {
  game: string;
  onRate: (rating: number | null) => void;
}

export default function GameRater({ game, onRate }: Props) {
  const [didImageLoaded, setDidImageLoaded] = useState(false);
  const [played, setPlayed] = useState(false);

  return (
    <div className="flex min-w-[640px] flex-col items-center space-y-4">
      {!didImageLoaded && <Loading />}
      <img
        src={`${BASE_URL}image/${game}`}
        alt={game}
        onLoad={() => setDidImageLoaded(true)}
        className="grow-load"
      />
      <h1 className="h4 grow-load text-primary">{game}</h1>
      <hr className="grow-load w-full border-primary" />
      {played ? (
        <RateIcons game={game} onRate={onRate} />
      ) : (
        <div className="flex w-full justify-evenly text-2xl">
          <PrimaryButton
            onClick={() => onRate(null)}
            className="grow-load bg-primary transition-all hover:scale-110 hover:bg-primary-200"
          >
            Didn't play
          </PrimaryButton>
          <PrimaryButton
            onClick={() => setPlayed(true)}
            className="grow-load bg-primary transition-all hover:scale-110 hover:bg-primary-200"
          >
            Played
          </PrimaryButton>
        </div>
      )}
    </div>
  );
}

const RateIcons = ({ onRate }: Props) => {
  return (
    <div className="flex w-full justify-evenly">
      <button onClick={() => onRate(1)} className="grow-load">
        <span className="material-symbols-outlined spin-load text-6xl text-primary-900 transition-all hover:scale-125">
          sentiment_very_dissatisfied
        </span>
      </button>
      <button onClick={() => onRate(2)} className="grow-load">
        <span className="material-symbols-outlined spin-load text-6xl text-primary-700 transition-all hover:scale-125">
          sentiment_dissatisfied
        </span>
      </button>
      <button onClick={() => onRate(3)} className="grow-load">
        <span className="material-symbols-outlined spin-load text-6xl text-primary-500 transition-all hover:scale-125">
          sentiment_neutral
        </span>
      </button>
      <button onClick={() => onRate(4)} className="grow-load">
        <span className="material-symbols-outlined spin-load text-6xl text-primary-300 transition-all hover:scale-125">
          mood
        </span>
      </button>
      <button onClick={() => onRate(5)} className="grow-load">
        <span className="material-symbols-outlined spin-load text-6xl text-primary-100 transition-all hover:scale-125">
          sentiment_very_satisfied
        </span>
      </button>
    </div>
  );
};
