import Registration from "../components/Registration";
import { BASE_URL } from "../configuration";

export default function SignUp() {
  const onSignUp = async (username: string, password: string) => {
    const url =
      BASE_URL + "signup?" + new URLSearchParams({ username, password });
    const result = await fetch(url, { method: "POST" }).then((response) =>
      response.json()
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
