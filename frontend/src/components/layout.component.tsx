import { useAppSelector } from "../redux/hooks";
import Chats from "./chats.component";
import OffCanvas from "./helpers/offCanvas.component";
import Messages from "./messeges.component";

const Layout = () => {
  const { canvas } = useAppSelector((state) => state.modal);
  return (
    <>
      {canvas && <OffCanvas />}
      <div className="container flex mx-auto min-h-screen">
        <div className="overflow-auto py-2 h-screen border-r border-l">
          <Chats />
        </div>
        <Messages />
      </div>
    </>
  );
};

export default Layout;
