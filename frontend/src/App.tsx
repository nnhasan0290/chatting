import Layout from "./components/layout.component";
import Auth from "./components/auth.component";
import { useLoadUserQuery } from "./redux/services/authServices";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { currentUser } from "./redux/features/authslice";

function App() {
  const { isSuccess, isFetching, data } = useLoadUserQuery(undefined);
  return <>{isSuccess ? <Layout /> : <Auth />}</>;
}

export default App;
