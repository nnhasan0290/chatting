const Login = () => {
  return (
    <form action="" className="flex flex-col gap-3 items-center min-w-[300px]">
      <input className="input" type="text" placeholder="Enter Email Account" />

      <input
        className="input"
        type="password"
        name="password"
        placeholder="Password"
        id=""
      />

      <button
        type="submit"
        className="px-10 font-[600] py-3 mt-5 text-white bg-blue-400 rounded-full"
      >
        Submit
      </button>
    </form>
  );
};

export default Login
