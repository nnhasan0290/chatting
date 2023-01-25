import {  useRef } from "react";
import { hideModal } from "../redux/features/modalSlice";
import { useAppDispatch } from "../redux/hooks";
import { ImCross } from "react-icons/im";

const Verify = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  return (
    <div
      ref={modalRef}
      className="flex fixed top-0 left-0 justify-center items-center w-full h-screen bg-black/50"
    >
      <div className="bg-white w-[40%] text-center p-5 rounded-md relative">
        <span
          onClick={() => dispatch(hideModal())}
          className="absolute top-0 right-0 z-20 p-1 translate-x-[100%] translate-y-[-100%] text-red-700 cursor-pointer bg-gray-300 rounded-md"
        >
          <ImCross size={16} />
        </span>
        <form action="">
          <p className="mb-5 text-sm font-[500]">
            An OTP is sent to your email. Please Enter the OTP to verify.
          </p>
          <input type="text" className="input" />
          <button className="bg-blue-500 mt-5 rounded-md text-white font-[500] px-5 py-3">
            Submit
          </button>
        </form>
        <span className="text-sm">
          Haven't found code?{" "}
          <span className="text-blue-500 font-[600] cursor-pointer">
            Send Again
          </span>
        </span>
      </div>
    </div>
  );
};

export default Verify;
