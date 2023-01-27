import Chats from "./chats.component";
import Messages from "./messeges.component";

const Layout = () => {
  return (
    <div className="container flex mx-auto min-h-screen">
      <div className="overflow-auto py-2 h-screen border-r border-l">
        <Chats />
      </div>
      <Messages />
    </div>
  );
};

export default Layout;
