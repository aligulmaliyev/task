import { ILogin } from "../models/Login";
import { api } from "./api";

class UserService {
  get = async (user: ILogin) => {
    const response = await fetch(api + "/login", {
      body: JSON.stringify(user),
    });
    return response.json();
  };
  updateName = async (name: string) => {
    const response = await fetch(api, {
      method: "PUT",
      body: JSON.stringify({ name }),
    });
    return response;
  };
  updatePassword = async (password: string) => {
    const response = await fetch(api, {
      method: "PUT",
      body: JSON.stringify({ password }),
    });
    return response;
  };
}

export default UserService;
