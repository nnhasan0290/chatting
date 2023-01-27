import Layout from "./components/layout.component";
import Auth from "./components/auth.component";
import { useLoadUserQuery } from "./redux/services/authServices";
import Loader from "./components/loader.component";

function App() {
  const { isSuccess, isLoading, data } = useLoadUserQuery("data");
  if (isLoading) return <Loader />;
  return <>{isSuccess ? <Layout /> : <Auth />}</>;
}

export default App;
