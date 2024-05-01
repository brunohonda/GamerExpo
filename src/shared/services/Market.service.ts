import { Market } from "../interfaces/Market";
import { storage } from "./Storage";

export class MarketService {
  private static storageKey = 'Market';

  static async create(data: Market): Promise<void> {
    const ids: string[] = await storage.getIdsForKey(this.storageKey);
    const alreadyExists = ids.includes(data.email);

    if (alreadyExists) {
      throw new Error('Usuário já existe');
    }

    await storage.save({
      key: this.storageKey,
      id: data.email,
      expires: null,
      data,
    });
  }

  static async getList(): Promise<Market[]> {
    try {
      const items: Market[] = await storage.getAllDataForKey(this.storageKey);

      return items.reverse();
    } catch (error) {
      return [];
    }
  }

  static async update(data: Market): Promise<void> {
    const ids: string[] = await storage.getIdsForKey(this.storageKey);
    const alreadyExists = ids.includes(data.email);

    if (!alreadyExists) {
      throw new Error('Usuário não encontrado');
    }

    await storage.remove({
      key: this.storageKey,
      id: data.email,
    })

    await storage.save({
      key: this.storageKey,
      id: data.email,
      expires: null,
      data,
    });
  }
}