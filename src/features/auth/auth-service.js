import { AnonymousUser } from "@features/auth/defaults";
import axios from "axios";

const LoginUrl = "http://127.0.0.1:8000/accounts/login/";

class AuthService {
  static setUserInLocalStorage(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  static async login({ username, password }) {
    try {
      const response = await axios.post(LoginUrl, {
        username,
        password,
      });
      this.setUserInLocalStorage(response.data);
      return { data: response.data };
    } catch (error) {
      return { isInvalid: true };
    }
  }

  static getCurrentUser() {
    const user = localStorage.getItem("user");
    if (user !== null) return JSON.parse(user);
    return AnonymousUser;
  }
}

export default AuthService;
