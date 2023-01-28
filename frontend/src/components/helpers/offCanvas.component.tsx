import { GrClose } from "react-icons/gr";

const OffCanvas = ({ setShowCanvas }: any) => {

  return (
    <div className="fixed top-0 left-0 z-30 w-full h-screen bg-black/50">
      <div
        className="relative flex text-center items-center justify-center w-[70vw] sm:w-[25vw] border h-screen text-[#00215B] text-[24px] leading-[24px] bg-white  top-0 left-0 box-border overflow-hidden tnsFromRight"
      >
        <span
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setShowCanvas(false)}
        >
          <GrClose />
        </span>
        <div className="flex flex-col gap-7">thi sis the off canvas</div>
      </div>
    </div>
  );
};

export default OffCanvas;
