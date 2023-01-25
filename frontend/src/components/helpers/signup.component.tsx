import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { showModal } from "../../redux/features/modalSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface formData {
  userName?: string;
  email?: string;
  pass?: string;
  confirmPass?: string;
}

const schema = yup
  .object({
    userName: yup.string().required(),
    email: yup.string().email().required(),
    pass: yup.string().min(6).required(),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("pass")], "Passwords must be matched")
      .required(),
  })
  .required();

const SignUp = () => {
  // const inputImgRef = useRef<HTMLInputElement>(null);
  const { modal } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  console.log(errors);

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 items-center sm:min-w-[450px] w-auto"
    >
      <input
        className={`input ${errors.userName && "border-red-600"}`}
        type="text"
        placeholder="Enter Username"
        {...register("userName")}
      />
      {errors.userName && (
        <p className="text-sm leading-3 text-red-600 capitalize">
          {" "}
          <>{errors.userName.message}</>
        </p>
      )}
      <div className="flex gap-3 w-full">
        <input
          className={`input ${errors.email && "border-red-600"}`}
          type="text"
          placeholder="Enter Email Account"
          {...register("email")}
        />

        <span
          onClick={() => dispatch(showModal())}
          className="bg-blue-500 flex items-center justify-center cursor-pointer font-[500] text-white px-5 rounded-md"
        >
          Verify
        </span>
      </div>
      {errors.email && (
        <p className="text-sm leading-3 text-red-600 capitalize">
          {" "}
          <>{errors.email.message}</>
        </p>
      )}
      <input
        className={`input ${errors.pass && "border-red-600"}`}
        type="password"
        {...register("pass")}
        placeholder="Password"
        id=""
      />
      {errors.pass && (
        <p className="text-sm leading-3 text-red-600 capitalize">
          {" "}
          <>{errors.pass.message}</>
        </p>
      )}
      <input
        className={`input ${errors.confirmPass && "border-red-600"}`}
        type="password"
        {...register("confirmPass")}
        placeholder="Confirm Password"
        id=""
      />
      {errors.confirmPass && (
        <p className="text-sm leading-3 text-red-600 capitalize">
          {" "}
          <>{errors.confirmPass.message}</>
        </p>
      )}
      {/* <div className="flex gap-3 items-center w-full">
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
      <input type="file" hidden ref={inputImgRef} /> */}

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
