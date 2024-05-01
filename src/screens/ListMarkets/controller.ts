import { Market } from "../../shared/interfaces/Market";
import { MarketService } from "../../shared/services/Market.service";

export class ListMarketsController {
  static async getList(): Promise<Market[]> {
    const data = await MarketService.getList();
    return data;
  }
}