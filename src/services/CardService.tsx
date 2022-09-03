import { ICard } from "../models/Card";
import { api } from "./api";

class CardService {
  getList = async () => {
    const response = await fetch(api);
    return response.json();
  };

  get = async (id: number) => {
    const response = await fetch(api + "/" + id);
    return response.json();
  };

  post = async (user: ICard) => {
    const response = await fetch(api + "cards", {
      method: "POST",
      body: JSON.stringify(user),
    });
    return response;
  };
  put = async (user: ICard) => {
    const response = await fetch(api + `cards/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
    });
    return response;
  };
  delete = async (id: number) => {
    const response = await fetch(api + "/" + id, {
      method: "DELETE",
    });
    return response;
  };
}

export default CardService;
