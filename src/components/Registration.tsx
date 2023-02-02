import { useState } from "react";
import { ReactComponent as Logo } from "../assets/NextGameLogo.svg";
import TextField from "./theme/TextField";

interface Props {
  onClick: (username: string, password: string) => void;
  title: string;
  className?: string;
}

export default function Registration({ onClick, title, className }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className={`w-[640px] space-y-2 rounded-lg bg-surface-dp1 p-4 ${className}`}
      onSubmit={() => onClick(username, password)}
    >
      <Logo className="mx-auto w-[480px]" />
      <hr className="!-mt-7 !mb-10 border-primary" />
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
    </form>
  );
}
