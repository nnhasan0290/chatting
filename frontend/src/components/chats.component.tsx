import { useEffect, useState } from "react";
import { BiExit, BiPlus, BiSearchAlt2, BiTrash } from "react-icons/bi";
import { showOffCanvas } from "../redux/features/modalSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  useLoadUserQuery,
  useLogoutUserMutation,
} from "../redux/services/authServices";
import {
  useAllChatsQuery,
  useDeleteChatMutation,
} from "../redux/services/chatServices";
import Loader from "./loader.component";

const Chats = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useAllChatsQuery("data", {
    refetchOnMountOrArgChange: true,
  });
  const loadState = useLoadUserQuery("data");

  const [logoutUser] = useLogoutUserMutation();
  const [deleteChat] = useDeleteChatMutation();

  const [chats, setChats] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setChats(
        data.chats.filter((e: any) =>
          e.users[1].userName.trim().includes(query.trim())
        )
      );
    }
  }, [query, isSuccess, data]);
  return (
    <div className="p-2 w-full h-screen">
      <div className="sticky top-0 bg-white border-b max-sm:pb-3 max-sm:pr-5">
        <div className="flex justify-between items-cener">
          <h2 className="text-black font-[700] max-sm:hidden sm:text-2xl">
            Chats
          </h2>
          <span
            className="flex gap-2 items-center p-1  text-white bg-blue-500 rounded-md font-[600] mr-3 transition-all duration-300 cursor-pointer hover:bg-blue-600"
            data-bs-toggle="tooltip"
            title="Add New Friends"
            onClick={() => dispatch(showOffCanvas())}
          >
            <BiPlus size={30} />
          </span>
        </div>

        <div className="relative z-0 my-2 max-sm:hidden">
          <input
            type="search"
            className="z-[-1] px-10 py-1 w-full bg-gray-200 rounded-full border outline-none"
            placeholder="Search"
            onChange={(e: any) => setQuery(e.target.value)}
          />
          <span className="absolute left-4  z-10 top-[50%] translate-y-[-50%]">
            <BiSearchAlt2 size={22} />
          </span>
        </div>
      </div>
      <div>
        {isLoading && <Loader />}
        {isSuccess &&
          chats.map((each: any, i: number) => (
            <div className="flex relative z-10 gap-3 items-center p-1 mt-1 mb-4 rounded-md cursor-pointer hover:bg-gray-300">
              <img
                src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                alt=""
                height={50}
                width={50}
                className="rounded-full"
              />
              <div className="max-sm:hidden">
                <h3 className="text-lg leading-4 text-black font-[500] p-0 truncate ">
                  {each.users[1].userName}
                </h3>
                <p className="max-md:w-[100px] text-sm leading-4 truncate">
                  {" "}
                  <span>You: </span> latest message
                </p>
              </div>
              <span
                onClick={(e: any) => {
                  e.stopPropagation();
                  deleteChat({ chatId: each._id });
                }}
                className="absolute right-1 p-1 text-white bg-gray-400 rounded-full hover:bg-red-400 max-sm:bottom-0"
              >
                <BiTrash />
              </span>
            </div>
          ))}
      </div>
      <span
        onClick={() => {
          logoutUser("data");
        }}
        className="flex absolute bottom-2 gap-2 items-center sm:pl-5 text-white bg-blue-500  rounded-full font-[600] mr-3 transition-all duration-300  hover:bg-blue-600"
      >
        <span className="hidden capitalize sm:block"> {loadState.data.userName}</span>
        <span   data-bs-toggle="tooltip"
            title="Logout" className="p-2 bg-red-400 rounded-full cursor-pointer hover:bg-red-600">
        <BiExit size={30} />{" "}
          
        </span>
      </span>
    </div>
  );
};

export default Chats;
