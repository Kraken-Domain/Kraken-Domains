import React from "react";
import styles from "../styles";

const Lookup = () => {
  return (
    <>
      <div className="ml-[300px] text-white  mt-10">
        <h1 className="text-3xl">Check Domain Details</h1>
        <p className="mt-3">
          You can lookup details of any domain created using out platform
        </p>
      </div>

      <div className="mt-6 ml-[300px]">
        <div
          className={`${styles.innerWidth} mx-auto flex justify-start items-center gap-3`}
        >
          <form className="w-1/2">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none shadow-2xl">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-800 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-gray-800 text-lg border border-gray-500 rounded-lg placeholder-gray-900 bg-secondary-white"
                placeholder="Search Domains..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Check
              </button>
            </div>
          </form>
        </div>

        <p className="text-xl text-white mt-6">Results:</p>
      </div>
    </>
  );
};

export default Lookup;
