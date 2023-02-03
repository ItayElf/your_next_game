import Registration from "../components/Registration";
import { BASE_URL } from "../configuration";
import { fetchPost } from "../Fetching";

export default function Login() {
  const onLogin = async (username: string, password: string) => {
    const url = BASE_URL + "login";
    const result = await fetchPost(url, { username, password }).then(
      (response) => response.json()
    );
    if (!result) {
      throw Error("Invalid username or password");
    }
  };

  return (
    <>
      <div className="absolute inset-0 h-full w-full animate-pulse bg-dotted-spacing-8 bg-dotted-primary" />
      <Registration
        title="Login"
        onClick={onLogin}
        className="relative mx-auto md:mt-16"
      />
    </>
  );
}
