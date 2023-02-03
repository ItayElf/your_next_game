import Header from "../components/Header";
import PrimaryButton from "../components/theme/PrimaryButton";
import catalogue from "../assets/Home/catalogue.webp";
import rating from "../assets/Home/rating.webp";
import recommendations from "../assets/Home/recommendations.webp";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref != null) {
      setHeight(ref.current?.clientHeight ?? 0);
    }
  }, [setHeight]);

  return (
    <>
      <Header />
      <div
        className="absolute inset-0 mt-24 w-full bg-dotted-spacing-8 bg-dotted-primary-100 sm:animate-pulse sm:bg-dotted-primary"
        style={{ height: height }}
      />
      <div
        className="container relative mx-auto bg-surface p-4 pt-24"
        ref={ref}
      >
        <div className="relative flex">
          <div className="w-1/2 space-y-8 p-2">
            <h1 className="h2 text-primary-accent">Your Next Game!</h1>
            <p className="h6">
              Your Next Game is a website that helps you find the next game to
              play based on your previous liked games. You tell us which game
              you like and which you don't and we'll suggest you the very next
              game you should play!
            </p>
            <PrimaryButton className="h6">Let's start!</PrimaryButton>
          </div>
          <img
            src={catalogue}
            alt=""
            className="clip-path-slash absolute right-0 h-[380px] w-[45vw] object-cover"
          />
        </div>
        <div className="relative mt-64 flex">
          <img
            src={rating}
            alt=""
            className="clip-path-slash-reverse absolute left-0 h-[330px] w-[40vw] object-cover"
          />
          <div className="w-1/2" />
          <div className="w-1/2 space-y-8 p-2">
            <h2 className="h2 text-primary-accent">Tell Us What You Like!</h2>
            <p className="h6">
              The first step to know what will be your favorite game is to tell
              up what games you like! All you need to do is rate some games on a
              scale of 1 to 5 and we'll do the hard work, and recommend you
              games that suits your flavour.
            </p>
            <PrimaryButton>Start Rating</PrimaryButton>
          </div>
        </div>
        <div className="relative mt-64 flex">
          <div className="w-1/2 space-y-8 p-2">
            <h2 className="h2 text-primary-accent">Get Recommendations!</h2>
            <p className="h6">
              After rating some games, you are only one click away from getting
              recommendations! Simply click the button below to view all the
              games that fits your unique and original taste!
            </p>
            <PrimaryButton>Recommendations</PrimaryButton>
          </div>
          <img
            src={recommendations}
            alt=""
            className="clip-path-slash absolute right-0 h-[280px] w-[40vw] object-cover"
          />
        </div>
      </div>
    </>
  );
}
