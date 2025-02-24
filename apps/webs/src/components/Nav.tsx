import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Nav = () => {
  return (
    <section className="py-[16px] bg-[$#7550E9] bg-[#50CAF4] ">
      <div>
        {" "}
        <nav className="flex items-center justify-between max-w-[1456px] mx-auto font-amazonV2 font-[600] text-white  ">
          <div className="flex max-lg:w-full  gap-[64px] items-center ">
            <div className="lg:hidden w-full flex items-center">
              <span>Menu list</span>
              <IoIosArrowDown />
            </div>
            <h2 className="max-lg:text-center w-full">UniKitab</h2>

            <ul
              className="flex max-lg:hidden justify-between gap-[64px] whitespace-nowrap
             items-center"
            >
              <li className="hover:bg-white hover:text-black px-3 py-2 rounded-md">
                Home
              </li>
              <li className="hover:bg-white hover:text-black px-3 py-2 rounded-md">
                Pyq Section
              </li>
              <li className="hover:bg-white  hover:text-black px-3 py-2 rounded-md">
                Books
              </li>
              <li className="hover:bg-white  hover:text-black px-3 py-2 rounded-md">
                Bookmarks
              </li>
            </ul>
          </div>
          <div className="flex gap-[16px]">
            <IoMdSearch
              className=" hover:bg-white p-1 hover:rounded-full
               hover:fill-black cursor-pointer
            w-9 h-9 "
            />

            <FaUserCircle
              className="p-1 hover:rounded-full hover:bg-white cursor-pointer hover:fill-black 
            w-9 h-9 "
            />
          </div>
        </nav>
      </div>
    </section>
  );
};
export { Nav };
