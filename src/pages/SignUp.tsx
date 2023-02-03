import Registration from "../components/Registration";
import { BASE_URL } from "../configuration";
import { fetchPost } from "../Fetching";

export default function SignUp() {
  const onSignUp = async (username: string, password: string) => {
    const url = BASE_URL + "signup";
    const result = await fetchPost(url, { username, password }).then(
      (response) => response.json()
    );
    if (!result) {
      throw Error("Username is already taken");
    }
  };

  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-dotted-spacing-8 bg-dotted-primary-100 sm:animate-pulse sm:bg-dotted-primary" />
      <Registration
        title="Sign Up"
        onClick={onSignUp}
        className="relative mx-auto md:mt-16"
      />
    </>
  );
}
