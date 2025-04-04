import { Text, View } from "react-native";
import { store  } from './store';
import { Provider } from "react-redux";
import Counter from "./counter";

export default function Index() {
  return (
    <Provider store={store}>
      <Counter />        
    </Provider>
  );
}
