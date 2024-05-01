import { Address } from "../../interfaces/Address";
import { AddressDto } from "../../interfaces/AddressDto";

export class MarketFormController {
  static async fetchAddress(postalCode: string): Promise<Address> {
    return await fetch(`https://viacep.com.br/ws/${ postalCode }/json/`)
      .then(async (response: Response) => {
        const data = await response.json() as AddressDto;
        return {
          postalCode: data.cep.replace(/[^\d]/, ''),
          street: data.logradouro,
          addressNumber: '',
          neighborhood: data.bairro,
          city: data.localidade,
          stateCode: data.uf,
        }
      });
  }
}