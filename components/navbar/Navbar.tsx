"use client";

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          {" "}
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
