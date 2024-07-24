"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setopen] = useState(false);

  return (
    <div  className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer "
        onClick={() => setopen((prev) => !prev)}
      >
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${open && "rotate-45 origin-left ease-in-out duration-500"}`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${open && "opacity-0"}`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm ${open && "-rotate-45 origin-left ease-in-out duration-500"}`} />
      </div>
      {
        open &&(
            <div className="h-[calc(100vh-96px)] absolute left-0 top-24 w-full flex flex-col gap-9 justify-center items-center bg-white font-medium text-xl z-10 " >
                <Link className="hover:bg-slate-400 rounded-md p-3" href="/">Home</Link>
                <Link className="hover:bg-slate-400 rounded-md p-3" href="/friends" >Friends</Link>
                <Link className="hover:bg-slate-400 rounded-md p-3" href="/groups" >Groups</Link>
                <Link className="hover:bg-slate-400 rounded-md p-3" href="/stories" >Stories</Link>
            </div>
        )
      }
    </div>
  );
};

export default MobileMenu;
