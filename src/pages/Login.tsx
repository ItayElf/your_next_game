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
    <div className="">
      <Registration
        title="Login"
        onClick={onLogin}
        className="mx-auto md:mt-16"
      />
    </div>
  );
}
