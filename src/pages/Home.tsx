import Header from "../components/Header";
import PrimaryButton from "../components/theme/PrimaryButton";
import catalogue from "../assets/Home/catalogue.webp";
import rating from "../assets/Home/rating.webp";
import recommendations from "../assets/Home/recommendations.webp";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
        className="absolute inset-0 mt-20 hidden w-full bg-dotted-spacing-8 bg-dotted-primary-100 sm:block sm:animate-pulse sm:bg-dotted-primary"
        style={{ height: height }}
      />
      <div
        className="container relative mx-auto bg-surface p-4 lg:pt-24"
        ref={ref}
      >
        <div className="relative lg:flex">
          <img
            src={catalogue}
            alt=""
            className="lg:clip-path-slash mb-6 h-64 w-full object-cover lg:absolute lg:right-0 lg:h-[330px] lg:w-[45vw] lg:rounded-xl xl:h-[380px]"
          />
          <div className="space-y-8 p-2 lg:w-1/2">
            <h1 className="h4 sm:h2 text-primary-accent">Your Next Game!</h1>
            <p className="s1 sm:h6 !mb-8">
              Your Next Game is a website that helps you find the next game to
              play based on your previous liked games. You tell us which game
              you like and which you don't and we'll suggest you the very next
              game you should play!
            </p>
            <Link to={"/rate"}>
              <PrimaryButton className="h6">Let's start!</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className="relative mt-16 lg:mt-64 lg:flex">
          <img
            src={rating}
            alt=""
            className="lg:clip-path-slash-reverse left-0 mb-6 h-64 w-full object-cover lg:absolute lg:h-[370px] lg:w-[40vw] lg:rounded-xl xl:h-[330px]"
          />
          <div className="hidden lg:block lg:w-1/2" />
          <div className="w-full space-y-8 p-2 lg:w-1/2">
            <h2 className="h4 sm:h2 text-primary-accent">
              Tell Us What You Like!
            </h2>
            <p className="s1 sm:h6 !mb-8">
              The first step to know what will be your favorite game is to tell
              up what games you like! All you need to do is rate some games on a
              scale of 1 to 5 and we'll do the hard work, and recommend you
              games that suits your flavour.
            </p>
            <Link to={"/rate"}>
              <PrimaryButton>Start Rating</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className="relative mt-16 lg:mt-64 lg:flex">
          <img
            src={recommendations}
            alt=""
            className="lg:clip-path-slash right-0 mb-6 h-64 w-full object-cover lg:absolute lg:h-[350px] lg:w-[40vw] lg:rounded-xl xl:h-[280px]"
          />
          <div className="space-y-8 p-2 lg:w-1/2">
            <h2 className="h4 sm:h2 text-primary-accent">
              Get Recommendations!
            </h2>
            <p className="s1 sm:h6">
              After rating some games, you are only one click away from getting
              recommendations! Simply click the button below to view all the
              games that fits your unique and original taste!
            </p>
            <PrimaryButton>Recommendations</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
