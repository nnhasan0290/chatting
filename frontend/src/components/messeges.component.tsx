import { BiExit, BiSend } from "react-icons/bi";
import { useLogoutUserMutation } from "../redux/services/authServices";

const Messages = () => {
 
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
        
      </div>
      <div className="h-[calc(100vh-60px)] pt-5 overflow-auto relative">
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
        <div className="my-2 text-right">
          <span className="px-3 py-2 text-white bg-blue-500 rounded-full max-w-[70%]">
            This message from you
          </span>
        </div>
        <div className="flex absolute right-0 bottom-0 gap-1 items-center pb-2">
          <input type="text" placeholder="Aa" className="sm:w-[400px] rounded-full  input" />
          <span className="p-2 rounded-full cursor-pointer hover:bg-gray-300">
          <BiSend size={30} />

          </span>
        </div>
      </div>
    </div>
  );
};

export default Messages;
