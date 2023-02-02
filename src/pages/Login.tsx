import Registration from "../components/Registration";

export default function Login() {
  const onLogin = (username: string, password: string) => {};

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
