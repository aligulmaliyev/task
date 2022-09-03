import { makeAutoObservable, runInAction } from "mobx";
import { IAccount } from "../models/Account";
import AccountService from "../services/AccountService";

class AccountStore {
  accountService: AccountService;
  accounts: IAccount[] = [];
  account: IAccount = {} as IAccount;
  status: string = "initial";

  constructor() {
    this.accountService = new AccountService();
    makeAutoObservable(this);
  }

  getAccounts = async () => {
    try {
      const data = await this.accountService.getList();
      runInAction(() => {
        this.accounts = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  getAccount = async (id: number) => {
    try {
      const data = await this.accountService.get(id);
      runInAction(() => {
        this.account = data;
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
  createAccount = async (account: IAccount) => {
    try {
      const response = await this.accountService.post(account);
      if (response.status === 201) {
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
  updateAccount = async (account: IAccount) => {
    try {
      const response = await this.accountService.put(account);
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
  deleteAccount = async (id: number) => {
    try {
      const response = await this.accountService.delete(id);
      if (response.status === 204) {
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
}

export default AccountStore;
