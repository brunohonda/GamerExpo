import { Gamer } from "../interfaces/Gamer";
import { storage } from "./Storage";

export class GamerService {
  private static storageKey = 'Gamer';

  static async create(data: Gamer): Promise<void> {
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

  static async getList(): Promise<Gamer[]> {
    try {
      const items: Gamer[] = await storage.getAllDataForKey(this.storageKey);
      console.log('BANANA', items);

      return items;
    } catch (error) {
      return [];
    }
  }
}