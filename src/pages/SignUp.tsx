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
    <div className="">
      <Registration
        title="Sign Up"
        onClick={onSignUp}
        className="mx-auto md:mt-16"
      />
    </div>
  );
}
