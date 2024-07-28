import Image from "next/image";
import React from "react";
import { text } from "stream/consumers";

const Avertisement = ({ size }: { size?: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm ">
      {/* top */}
      <div className="flex justify-between items-center text-gray-500 font-medium">
        <span>Sponsered Ads</span>
        <Image src="/more.png" alt="" height={16} width={16}></Image>
      </div>
      {/* bottom */}
      <div className={`flex flex-col mt-4 ${size == "sm" ? "gap-2" : "gap-4"}`}>
        <div
          className={`relative w-full ${
            size == "sm" ? "h-24" : size == "md" ? "h-36" : "h-48"
          }`}
        >
          <Image src="" alt="" fill className="object-cover rounded-lg"></Image>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src=""
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          ></Image>
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p
          className={size=="sm"?"text-xs":"text-sm"}>
           { size == "sm"
              ? "Lorem ipsum dolor sit amet consectetur adipisicing elit Sint repellat"
              : (size == "md"
                  ? "Lorem ipsum dolor sit amet consectetur adipisicing elit Sint repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit Sint repellat"
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit Sint repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit Sint repellatLorem ipsum dolor sit amet consectetur adipisicing elit Sint repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit Sint repellat ")}
          
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 rounded-lg text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Avertisement;
