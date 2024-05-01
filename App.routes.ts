
import { ListMarketsScreen } from "./src/screens/ListMarkets";
import { RegisterMarketScreen } from "./src/screens/RegisterMarket";
import { UpdateMarketScreen } from "./src/screens/UpdateMarket";
import { Screen } from "./src/shared/interfaces/Screen";

export const routes: Screen[] = [
  { name: 'Home', component: ListMarketsScreen },
  { name: 'Register', component: RegisterMarketScreen },
  { name: 'Update', component: UpdateMarketScreen },
];