import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { NavLink } from "react-router-dom";

export default function MyNav() {
  useEffect(() => {
    initFlowbite();
  });
  return (
    <nav className="bg-black  dark:bg-gray-900 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to={"/"}>
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              style={{ fill: "red" }}
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              width="25"
              viewBox="0 0 512 512"
            >
              <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Cinemaa.
            </span>
          </a>
        </NavLink>

        <div className="flex md:order-2 gap-5">
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-700 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
          >
            <NavLink to={"/login"}>Login</NavLink>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900   rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-700 dark:focus:border-red-700"
              placeholder="Search..."
            />
          </div>

          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            
                <NavLink to={"/"}
                 className={({isActive}) => isActive ? "block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-700":"block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-red-700"}
                 aria-current="page"
                >Home
                </NavLink>
            </li>
            <li>
              <button
                id="dropdownDelayButton"
                data-dropdown-toggle="dropdownDelay"
                data-dropdown-delay="100"
                data-dropdown-trigger="hover"
                class="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-red-700 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent 
                "
                type="button"
              >
                Movie{" "}
                <svg
                  data-accordion="open"
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownDelay"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to={"/pupolarmovies"}>Popular Movie</NavLink>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to={"/nowplaying"}>Now Playing</NavLink>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to={"/toprate"}>Top Rate</NavLink>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <NavLink to={"/upcoming"}> Up Coming</NavLink>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
            <NavLink to={"/contact"}
                 className={({isActive}) => isActive ? "block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-700":"block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-red-700"}
                 aria-current="page"
                >Contact Us
                </NavLink>
            </li>
            <li>
            <NavLink to={"/about"}
                 className={({isActive}) => isActive ? "block py-2 px-3 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 md:dark:text-red-700":"block py-2 px-3 text-white  rounded md:bg-transparent md:text-white md:p-0 md:dark:text-red-700"}
                 aria-current="page"
                >About
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
