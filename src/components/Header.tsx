import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/NextGameLogo.svg";
import { ReactComponent as Icon } from "../assets/NextGameIcon.svg";
import { getUser, isLoggedIn, logOutUser } from "../Auth";
import PrimaryButton from "./theme/PrimaryButton";

export default function Header() {
  const navigate = useNavigate();
  const isLogged = isLoggedIn();
  const user = getUser();

  const onLogOut = () => {
    logOutUser();
    navigate("/login");
  };

  return (
    <header className="z-50 flex h-16 w-full items-center justify-between bg-primary-accent p-4">
      <div className="flex items-center space-x-8">
        <Link to={"/"}>
          <Logo className="hidden h-12 fill-black sm:inline" />
          <Icon className="inline h-12 fill-black sm:hidden" />
        </Link>
        <div className="p-1 text-black sm:font-bold">
          <Link to={"/rate"} className="flex flex-col items-center">
            <span className="material-symbols-outlined sm:font-bold">
              trending_up
            </span>
            <p>Rate</p>
          </Link>
        </div>
      </div>
      <div>
        {isLogged ? (
          <div className="flex items-center space-x-4 font-bold text-black sm:text-lg">
            <p className="hidden sm:block">Welcome, {user?.username}!</p>
            <PrimaryButton
              onClick={onLogOut}
              className="hidden bg-primary text-black sm:inline"
            >
              Log out
            </PrimaryButton>
            <PrimaryButton
              onClick={onLogOut}
              className="inline bg-primary !p-2 text-black sm:hidden"
            >
              <span className="material-symbols-outlined">logout</span>
            </PrimaryButton>
          </div>
        ) : (
          <div className="space-x-4 font-bold sm:text-lg">
            <Link to={"/login"} className="text-black">
              Login
            </Link>
            <Link to={"/signUp"}>
              <PrimaryButton className="bg-primary text-black">
                Sign Up
              </PrimaryButton>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
