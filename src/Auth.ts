interface User {
  username: string;
  password: string;
}

export let user: User | null = null;

export const saveUser = (username: string, password: string) => {
  user = { username, password };
  localStorage.setItem("user", JSON.stringify(user));
};

export const logOutUser = () => {
  localStorage.removeItem("user");
  user = null;
};

export const loadUser = () => {
  try {
    user = JSON.parse(localStorage.getItem("user") ?? "");
  } catch (e) {
    user = null;
  }
  return user;
};

export const isLoggedIn = () => {
  return user != null;
};

export const getUser = () => user;
