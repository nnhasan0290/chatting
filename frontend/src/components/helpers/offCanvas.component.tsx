import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { hideCanvas } from "../../redux/features/modalSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  useAccessChatMutation,
  useAllUsersQuery,
} from "../../redux/services/chatServices";
import Loader from "../loader.component";

const OffCanvas = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [accessChat] = useAccessChatMutation();
  const { isSuccess, isLoading, data } = useAllUsersQuery("data");

  useEffect(() => {
    if (isSuccess) {
      setUsers(
        data.user.filter((e: any) => e.userName.trim().includes(query.trim()))
      );
    }
  }, [query, isSuccess]);
  return (
    <div className="fixed top-0 left-0 z-40 w-full h-screen bg-white bg-black/50">
      <div className="relative text-center w-[70vw] sm:w-[35vw] border h-screen text-[#00215B] text-[24px] leading-[24px] bg-white  top-0 left-0 box-border overflow-hidden tnsFromRight">
        <span
          className="absolute right-2 top-4 cursor-pointer"
          onClick={() => dispatch(hideCanvas())}
        >
          <GrClose size={22} />
        </span>
        <div className="mr-3 ml-3">
          <div className="relative pb-2 my-2 mr-7 border-b">
            <input
              onChange={(e: any) => setQuery(e.target.value)}
              type="search"
              className="px-10 py-1 w-full bg-gray-200 rounded-full border outline-none text-[13px]"
              placeholder="Search"
            />
            <span className="absolute left-4  z-10 top-[50%] translate-y-[-50%]">
              <BiSearchAlt2 size={22} />
            </span>
          </div>
          {isLoading && <Loader />}
          {isSuccess &&
            users?.map((each: any, i: number) => (
              <div
                onClick={() => {
                  accessChat({ userId: each._id });
                }}
                key={i}
                className="flex gap-3 items-center p-2 mt-1 mb-1 rounded-md cursor-pointer hover:bg-gray-200"
              >
                <img
                  src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt=""
                  height={50}
                  width={50}
                  className="rounded-full"
                />
                <div className="">
                  <h3 className="text-lg leading-4 text-black font-[500] p-0 truncate ">
                    {each.userName}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
