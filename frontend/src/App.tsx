import Layout from "./components/layout.component";
import Auth from "./components/auth.component";
import { useGetUsersQuery, useLoadUserQuery } from "./redux/services/authServices";

function App() {
  const data = useLoadUserQuery("data");
  console.log(data);
  return (
      <Auth />
  );
}

export default App;
