import { Market } from "../../shared/interfaces/Market";
import { MarketService } from "../../shared/services/Market.service";

export class UpdateMarketController {
  static async save(market: Market): Promise<void> {
    return MarketService.update(market);
  }
}