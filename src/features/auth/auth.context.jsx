import { createContext, useState } from "react";

import AuthService from "./auth-service";
import { AnonymousUser } from "./defaults";

const DefaultProps = {
  login: () => null,
  logout: () => null,
  user: AnonymousUser,
};

export const AuthContext = createContext(DefaultProps);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => AuthService.getCurrentUser());

  async function login({ username, password }) {
    const { data, isInvalid } = await AuthService.login({ username, password });
    if (!isInvalid) setUser(data);
    return { isInvalid };
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(AnonymousUser);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
