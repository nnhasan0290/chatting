import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface formData {
  email?: string;
  password?: string;
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <form
      action=""
      className="flex flex-col gap-3 items-center sm:min-w-[450px] w-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={`input ${errors.email && "border-red-600"}`}
        type="text"
        placeholder="Enter Email Account"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-sm leading-3 text-red-600 capitalize">
          {" "}
          <>{errors.email.message}</>
        </p>
      )}

      <input
        className={`input ${errors.password && "border-red-600"}`}
        type="password"
        {...register("password")}
        placeholder="Password"
        id=""
      />
      {errors.password && (
        <p className="text-sm leading-3 text-red-600 capitalize">
          {" "}
          <>{errors.password.message}</>
        </p>
      )}

      <button
        type="submit"
        className="px-10 font-[600] py-3 mt-5 text-white bg-blue-400 rounded-full"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
