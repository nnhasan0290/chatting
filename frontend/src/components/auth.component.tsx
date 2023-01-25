import { useRef, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import Login from "./helpers/login.component";
import SignUp from "./helpers/signup.component";
import Verify from "./verfication.component";

const Auth = () => {
  const [loginState, setLoginState] = useState(true);

  const { value } = useAppSelector((state) => state.modal);
  console.log(value);
  return (
    <>
      {value && <Verify />}
      <div className="flex flex-col justify-center items-center min-h-[100vh] gap-3 container">
        <h2 className="text-3xl font-[700] text-blue-400">Chats</h2>
        <h2 className="text-black font-[500] text-xl max-sm:hidden ">
          Message with your friends and family
        </h2>
        {loginState ? <Login /> : <SignUp />}

        <p className="text-sm">
          {loginState ? "Don't " : "Already "}
          Have an Account?{" "}
          <span
            className="text-blue-500 font-[500] cursor-pointer"
            onClick={() => setLoginState(!loginState)}
          >
            {loginState ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </>
  );
};

export default Auth;
