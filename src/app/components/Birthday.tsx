import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthday = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 ">
      {/* top */}
      <div className="flex items-center justify-between font-medium flex-1">
        <span className="text-gray-500">Birthday</span>
      </div>

      {/* bottom */}

      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="w-10 h-10 rounded-full object-cover"
            src="/emoji.png"
            alt=""
            height={40}
            width={40}
          ></Image>
          <span className="font-semibold">Tushar</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-xs rounded-md px-2 py-1">
            Celeberate
          </button>
        </div>
      </div>

      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 ">
        <Image src="/gift.png" alt="" height={24} width={24}></Image>
        <Link href="/" className="flex flex-col gap-1 text-xs">
        <span className="text-gray-700 font-semibold">Upcoming Birthday</span>
        <span className="text-gray-500" > See other 16 upcoming birthday</span>

        </Link>

      </div>
    </div>
  );
};

export default Birthday;
