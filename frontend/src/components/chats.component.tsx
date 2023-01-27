import { BiSearchAlt2 } from "react-icons/bi";

const Chats = () => {
  return (
    <div className="px-2 w-full">
      <div className="sticky top-0 bg-white border-b max-sm:pr-5 max-sm:hidden">
        <h2 className="text-black font-[700] sm:text-2xl">Chats</h2>
        <div className="relative my-2">
          <input
            type="search"
            className="px-10 py-1 w-full bg-gray-200 rounded-full border outline-none"
            placeholder="Search"
          />
          <span className="absolute left-4  z-10 top-[50%] translate-y-[-50%]">
            <BiSearchAlt2 size={22} />
          </span>
        </div>
      </div>
      <div>
        <div className="flex gap-3 items-center mt-1 mb-4">
          <img
            src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="" height={50} width={50} className="rounded-full"
          />
          <div className="max-sm:hidden">
            <h3 className="text-lg leading-4 text-black font-[500] p-0 truncate ">Person Name</h3>
            <p className="text-sm">
              {" "}
              <span>You: </span> latest message
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-1 mb-4">
          <img
            src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="" height={50} width={50} className="rounded-full"
          />
          <div className="max-sm:hidden">
            <h3 className="text-lg leading-4 text-black font-[500] p-0">Person Name</h3>
            <p className="text-sm">
              {" "}
              <span>You: </span> latest message
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-1 mb-4">
          <img
            src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="" height={50} width={50} className="rounded-full"
          />
          <div className="max-sm:hidden">
            <h3 className="text-lg leading-4 text-black font-[500] p-0">Person Name</h3>
            <p className="text-sm">
              {" "}
              <span>You: </span> latest message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
