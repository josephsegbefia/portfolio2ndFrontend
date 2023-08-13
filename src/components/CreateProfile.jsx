import React from "react";

const CreateProfile = () => {
  return (
    <div className="p-8 text-left w-full">
      <h1 className="text-center">Create Profile</h1>

      <form>
        <div className="flex flex-col my-2">
          <label className="capitalize text-sm py-2 font-extralight">
            upload picture
          </label>
          <input type="file" />

          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                first name
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                last name
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              headline
            </label>
            <input
              type="text"
              className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                email
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                phone
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid gap-4 grid-cols-2">
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                linkedin url
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-extralight">
                github url
              </label>
              <input
                type="text"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <label className="capitalize text-sm py-2 font-extralight">
                Skills
              </label>
              <input
                type="text"
                name="techs"
                placeholder="Add the skills you have one after the other and press the  + button after each add"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white w-full"
                value={""}
                onChange={""}
              />
            </div>

            <div>
              <button
                type="button"
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-8 w-1/2 justify-center"
                onClick={""}
              >
                +
              </button>
            </div>
            <div className="flex w-full">
              Added Skills:
              {/* {techReceived &&
                techReceived.map((tech, index) => (
                  <p
                    style={{ color: "teal", marginLeft: "8px" }}
                    key={index}
                  ></p>
                ))} */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
