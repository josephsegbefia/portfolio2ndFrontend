import React from "react";

const CreateProject = () => {
  return (
    <div className="p-8 text-left w-full">
      <form>
        <div className="gap-4 w-full">
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              email
            </label>
            <input
              type="text"
              name="email"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              message
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
            ></textarea>
          </div>
        </div>
        <div className="flex itesm-center justify-center">
          <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
            send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
