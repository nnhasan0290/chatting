import { BiExit } from "react-icons/bi";
import { useLogoutUserMutation } from "../redux/services/authServices";

const Messages = () => {
  const [logoutUser, data] = useLogoutUserMutation();
  return (
    <div className="w-full border-r">
      <div className="border-b h-[60px] shadow-md flex justify-between items-center">
        <div className="flex gap-3 items-center p-2">
          <img
            src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
            height={40}
            width={40}
            className="rounded-full"
          />
          <h3 className="text-lg leading-4 text-black font-[500] p-0">
            Person Name
          </h3>
        </div>
        <span
          onClick={() => {
            logoutUser("data");
          }}
          className="flex gap-2 items-center p-2 sm:px-5 text-white bg-red-500 rounded-full font-[600] mr-3 transition-all duration-300 cursor-pointer hover:bg-red-600"
        >
          <BiExit size={30} /> <span className="hidden sm:block">Logout</span> 
        </span>
      </div>
      <div className="max-h-[calc(100vh-60px)] mt-5 overflow-auto">
        <div className="flex gap-2 items-end mb-2">
          <img
            src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
            height={30}
            width={30}
            className="rounded-full"
          />
          <div className="flex flex-col items-start max-w-[70%]">
            <span className="text-xs">Name</span>
            <span className="px-3 py-2 bg-gray-300 rounded-full">
              This is a message
            </span>
          </div>
        </div>
      </div>
      <div className="my-2 text-right">
        <span className="px-3 py-2 text-white bg-blue-500 rounded-full max-w-[70%]">
          This message from you
        </span>
      </div>
    </div>
  );
};

export default Messages;
