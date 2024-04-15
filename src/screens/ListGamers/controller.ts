import { Gamer } from "../../shared/interfaces/Gamer";
import { GamerService } from "../../shared/services/Gamer.service";

export class ListGamersController {
  static async getList(): Promise<Gamer[]> {
    const data = await GamerService.getList();
    return data;
  }
}