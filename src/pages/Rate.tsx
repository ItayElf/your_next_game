import { Navigate } from "react-router-dom";
import { getUser } from "../Auth";
import Header from "../components/Header";

export default function Rate() {
  const user = getUser();

  if (user == null) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Header />
    </>
  );
}
