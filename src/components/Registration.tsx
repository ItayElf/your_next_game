import { useState } from "react";
import { ReactComponent as Logo } from "../assets/NextGameLogo.svg";
import Loading from "./theme/Loading";
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
  const [loading, setLoading] = useState(false);

  const resetInputs = () => {
    setUsername("");
    setPassword("");
  };

  const onClickWrapper = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onClick(username, password);
    } catch (e: any) {
      resetInputs();
      setError((e as Error).message);
    }
    setLoading(false);
  };

  return (
    <form
      className={`w-screen space-y-4 rounded-lg bg-surface-dp1 p-4 sm:w-[640px] ${className}`}
      onSubmit={(e) => onClickWrapper(e)}
    >
      <Logo className="mx-auto max-w-xs sm:w-[480px]" />
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
        {loading ? (
          <Loading className="mx-auto h-16 w-16 border-[6px]" />
        ) : (
          <PrimaryButton className="mx-auto text-xl">{title}</PrimaryButton>
        )}
      </div>
    </form>
  );
}
