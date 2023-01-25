import Layout from "./components/layout.component";
import Auth from "./components/auth.component";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}

export default App;
