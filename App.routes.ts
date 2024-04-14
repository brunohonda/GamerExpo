import { ListGamersScreen } from "./src/screens/ListGamers";
import { RegisterGamerScreen } from "./src/screens/RegisterGamer";
import { UpdateGamerScreen } from "./src/screens/UpdateGamer";
import { Screen } from "./src/shared/interfaces/Screen";

export const routes: Screen[] = [
  { name: 'Home', component: ListGamersScreen },
  { name: 'Register', component: RegisterGamerScreen },
  { name: 'Update', component: UpdateGamerScreen },
];