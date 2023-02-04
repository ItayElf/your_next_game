import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../Auth";
import GameRater from "../components/GameRater";
import Header from "../components/Header";
import Loading from "../components/theme/Loading";
import { BASE_URL } from "../configuration";
import { fetchPost } from "../Fetching";

export default function Rate() {
  const [games, setGames] = useState<string[] | null | undefined>(null);
  const [user] = useState(getUser());

  useEffect(() => {
    if (user != null) {
      fetchPost(BASE_URL + "to-rate", {
        username: user.username,
        password: user.password,
      })
        .then((response) => response.json())
        .then((json) => setGames(json))
        .catch(() => setGames(undefined));
    }
  }, [user]);

  const onRate = useCallback(
    (rating: number | null) => {
      games?.shift();
      console.log({ rating });
      setGames(games?.filter((g) => g !== games[0]));
    },
    [games]
  );

  if (user === null) {
    return <Navigate to={"/login"} />;
  }

  if (games === null) {
    return (
      <>
        <div className="absolute inset-0 -z-10 mt-20 block w-full bg-dotted-spacing-8 bg-dotted-primary-100 sm:animate-pulse sm:bg-dotted-primary" />
        <Header />
        <div className="flex h-full items-center justify-center pt-24">
          <Loading className="h-48 w-48 bg-surface" />
        </div>
      </>
    );
  }

  if (games === undefined) {
    return <></>;
  }

  const game = games[0];

  return (
    <>
      <Header />
      <div className="absolute inset-0 -z-50 mt-20 block w-full bg-dotted-spacing-8 bg-dotted-primary-100 sm:animate-pulse sm:bg-dotted-primary" />
      <div className="z-10 -mt-20 flex h-screen w-full items-center justify-center">
        <div className="w-full bg-surface-dp1 p-4 sm:w-[640px]">
          <GameRater key={game} game={game} onRate={onRate} />
        </div>
      </div>
    </>
  );
}
