import { Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn, saveUser } from "../Auth";
import Registration from "../components/Registration";
import { BASE_URL } from "../configuration";
import { fetchPost } from "../Fetching";

export default function Login() {
  const navigate = useNavigate();

  const onLogin = async (username: string, password: string) => {
    const url = BASE_URL + "login";
    const result = await fetchPost(url, { username, password }).then(
      (response) => response.json()
    );
    if (!result) {
      throw Error("Invalid username or password");
    }
    saveUser(username, password);
    navigate("/");
  };

  if (isLoggedIn()) {
    return <Navigate replace to={"/"} />;
  }

  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-dotted-spacing-8 bg-dotted-primary-100 sm:animate-pulse sm:bg-dotted-primary" />
      <Registration
        title="Login"
        onClick={onLogin}
        className="relative mt-16 sm:mx-auto"
      />
    </>
  );
}
