import Registration from "../components/Registration";
import { BASE_URL } from "../configuration";

export default function Login() {
  const onLogin = async (username: string, password: string) => {
    const url =
      BASE_URL + "login?" + new URLSearchParams({ username, password });
    const result = await fetch(url).then((response) => response.json());
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
