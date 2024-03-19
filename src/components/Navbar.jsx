import React from "react";
import { GiMedicines } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
function Navbar() {
  return (
    <div className="w-full h-full">
      <div className="h-[90px] shadow-2xl bg-[#20b2aa] py-1 px-5 flex justify-between">
        <h1 className=" flex text-[46px] mt-2 font-bold text-white sm:text-[56px] sm:mt-0">
          <GiMedicines color="white" className="mt-3" /> Aix{" "}
        </h1>

        <div>
          <input
            placeholder="Serach"
            type="text"
            className=" max-sm:ml-10 max-sm:py-2 max-sm:px-4  sm:ml-20 mr-20 text-center sm:text-[19px] font-poppins font-medium absolute left-[30%] px-2 py-2 mt-[26px] outline-none rounded-2xl w-[30%] "
          />
          <CiSearch
            className=" font-bold sm:absolute mt-8 mr-11 cursor-pointer left-[60%] "
            size={32}
          />
          <div className="hidden sm:flex gap-10 py-7 px-5 text-[19px] font-poppins font-semibold text-white">
            <p>Home</p>
            <p>About</p>
            <p>Pricing</p>
            <p>Contact</p>
          </div>
          <div className="block sm:hidden">
            <LuMenu
              className="absolute right-0 top-[5%] mr-3 mt-1 "
              size={30}
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
