import ssscales from "../assets/ssscales.svg";
import chat from "../assets/chat.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePwd = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h-screen w-screen relative grid grid-cols-3">
      <div className="col-span-1 z-10">
        <div className="bg-white h-screen p-4 flex flex-col gap-36 items-center">
          <div className="flex justify-center">
            <img src={chat} alt="chat-logo" width={80} />
          </div>
          <div className="flex flex-col items-center gap-5">
            <h1 className=" text-5xl font-medium font-Pop">Welcome back</h1>
            <h3 className="text-xl font-medium font-Mon">
              Enter your{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                Chatify
              </span>{" "}
              account details
            </h3>
            <div className="flex flex-col justify-center gap-6">
              <form className="flex flex-col gap-3">
                <input
                  type="type"
                  name="email"
                  placeholder="Enter your email"
                  className="inputs"
                  required
                />

                <div className="relative">
                  <Icon
                    icon={
                      showPassword
                        ? "weui:eyes-on-filled"
                        : "weui:eyes-off-filled"
                    }
                    height={30}
                    widths={30}
                    className="absolute top-3 right-4 cursor-pointer"
                    onClick={handleTogglePwd}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="inputs"
                    required
                  />
                </div>
              </form>
              <div className="flex justify-between">
                <div className="text-lg font-Mon hover:underline cursor-pointer">
                  {" "}
                  <Link to="/signup">
                    <h1>Sign up</h1>
                  </Link>
                </div>
                <div className="text-lg font-Mon hover:underline cursor-pointer">
                  <h1>forgot password?</h1>
                </div>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 text-white text-lg font-medium rounded-3xl p-3 "
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-0 left-0 w-screen h-screen bg-cover bg-center z-0 flex justify-start items-center p-4"
        style={{ backgroundImage: `url(${ssscales})` }}
      >
        <div className="flex flex-col gap-3">
          <h1 className="z-10 text-white text-6xl font-medium font-Pop">
            Bridging ideas,
          </h1>
          <h1 className="z-10 text-white text-6xl font-medium font-Pop">
            one message at a time.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
