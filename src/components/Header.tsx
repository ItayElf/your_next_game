import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/NextGameLogo.svg";
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
    <header className="flex h-16 w-full items-center justify-between bg-primary-accent p-4">
      <div>
        <Link to={"/"}>
          <Logo className="h-12 fill-black" />
        </Link>
      </div>
      <div>
        {isLogged ? (
          <div className="flex items-center space-x-4 text-lg font-bold text-black">
            <p className="block">Welcome, {user?.username}!</p>
            <PrimaryButton onClick={onLogOut} className="bg-primary text-black">
              Log out
            </PrimaryButton>
          </div>
        ) : (
          <div className="space-x-4 text-lg font-bold">
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
