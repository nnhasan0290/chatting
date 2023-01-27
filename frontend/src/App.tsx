import Layout from "./components/layout.component";
import Auth from "./components/auth.component";
import { useLoadUserQuery } from "./redux/services/authServices";

function App() {
  const { isSuccess } = useLoadUserQuery("data");
  return <>{isSuccess ? <Layout /> : <Auth />}</>;
}

export default App;
