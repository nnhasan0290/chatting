import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { showModal } from "../../redux/features/modalSlice";

const SignUp = () => {
  const inputImgRef = useRef<HTMLInputElement>(null);
  const {modal} = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  
  return (
    <form
      action=""
      className="flex flex-col gap-3 items-center sm:min-w-[450px] w-auto"
    >
      <input className="input" type="text" placeholder="Enter Username" />
      <div className="flex gap-3 w-full">
        <input
          className="input"
          type="text"
          placeholder="Enter Email Account"
        />
        <span onClick={() => dispatch(showModal())} className="bg-blue-500 flex items-center justify-center cursor-pointer font-[500] text-white px-5 rounded-md">
          Verify
        </span>
      </div>
      {}
      <input
        className="input"
        type="password"
        name="password"
        placeholder="Password"
        id=""
      />
      <input
        className="input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        id=""
      />
      <div className="flex gap-3 items-center w-full">
        <img
          src="https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt=""
          height={50}
          width={50}
          className="rounded-full"
        />
        <span
          className="px-10 font-[600] py-3 border rounded-md w-full text-center cursor-pointer"
          onClick={() => inputImgRef.current?.click()}
        >
          Image
        </span>
      </div>
      <input type="file" hidden ref={inputImgRef} />

      <button
        type="submit"
        className="px-10 font-[600] py-3 mt-5 text-white bg-blue-400 rounded-full"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUp;
