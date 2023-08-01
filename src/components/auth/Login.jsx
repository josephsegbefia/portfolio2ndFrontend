import React from "react";

const Login = () => {
  return (
    <div className="p-8 text-left w-full h-full">
      <form>
        <div className="gap-4 w-full mt-80">
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              username
            </label>
            <input
              type="text"
              name="username"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              password
            </label>
            <input
              type="password"
              name="password"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="my-8 font-bold uppercase rounded-md cursor-pointer">
            Login In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
