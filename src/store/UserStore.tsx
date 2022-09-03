import { makeAutoObservable, reaction, runInAction } from "mobx";
import { ILogin } from "../models/Login";
import UserService from "../services/UserService";

class LoginStore {
  userService: UserService;
  token: string = "";
  user: ILogin = {} as ILogin;
  status: string = "initial";

  constructor() {
    this.userService = new UserService();
    makeAutoObservable(this);
  }

  login = async (user: ILogin) => {
    try {
      // const token = await this.userService.get(user);
      runInAction(() => {
        this.user = user;
        this.token = user.name;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  logout = async () => {
    try {
      runInAction(() => {
        this.token = "";
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  changeName = async () => {
    try {
      const response = await this.userService.updateName(this.user.name);
      if (response.status === 200) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  changePassword = async () => {
    try {
      const response = await this.userService.updatePassword(
        this.user.password
      );
      if (response.status === 200) {
        runInAction(() => {
          this.status = "success";
        });
      }
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  setName = (name: string) => {
    this.user.name = name;
  };
  setPassword = (password: string) => {
    this.user.password = password;
  };
}

export default LoginStore;
