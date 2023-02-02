import { useState } from "react";
import { ReactComponent as Logo } from "../assets/NextGameLogo.svg";
import PrimaryButton from "./theme/PrimaryButton";
import TextField from "./theme/TextField";

interface Props {
  onClick: (username: string, password: string) => void;
  title: string;
  className?: string;
}

export default function Registration({ onClick, title, className }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetInputs = () => {
    setUsername("");
    setPassword("");
  };

  const onClickWrapper = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onClick(username, password);
    } catch (e: any) {
      resetInputs();
      setError((e as Error).message);
    }
  };

  return (
    <form
      className={`w-[640px] space-y-2 rounded-lg bg-surface-dp1 p-4 ${className}`}
      onSubmit={(e) => onClickWrapper(e)}
    >
      <Logo className="mx-auto w-[480px]" />
      <label htmlFor="username" className="text-xl">
        Username:
      </label>
      <TextField
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="Username"
        id="username"
        required
      />
      <div className="!mb-5" />
      <label htmlFor="password" className="text-xl">
        Password:
      </label>
      <TextField
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Password"
        id="password"
        required
      />
      {error && <p className="text-error">{error}</p>}
      <div className="!mt-8 flex">
        <PrimaryButton className="mx-auto text-xl">{title}</PrimaryButton>
      </div>
    </form>
  );
}
