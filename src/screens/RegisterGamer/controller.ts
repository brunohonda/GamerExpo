import { Gamer } from "../../shared/interfaces/Gamer";
import { GamerService } from "../../shared/services/Gamer.service";

export class RegisterGamerController {
  static async save(gamer: Gamer): Promise<void> {
    return GamerService.create(gamer);
  }
}