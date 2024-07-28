import Image from "next/image";
import React from "react";
import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server";

const AddPost = () => {
  const {userId} = auth()
  console.log(userId)
  const testAction = async (formdata:FormData) => {
    "use server"
    const desc = formdata.get("desc") as string;
    if(!userId)return;
    try {
     const res = await prisma.post.create({
        data:{
          userId:userId,
          desc:desc,
        }
      })
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white shadow-md gap-4 justify-center items-center rounded-lg flex text-sm p-4">
      <Image
        src=""
        alt=""
        height={12}
        width={12}
        className="w-12 h-12 object-cover rounded-full ring-2"
      />

      <div className="flex-1">
        <form action={testAction} className=" flex item-center justify-center gap-4">
          {/* textarea */}
          <textarea
            placeholder="Add Post"
            className="bg-slate-100 rounded-lg flex-1 p-2 outline-0"
            name="desc"
            id=""
          ></textarea>
          {/* emoji */}
          <Image
            src="/emoji.png"
            alt=""
            height={6}
            width={6}
            className="w-5 h-5 object-cover rounded-full ring-2 self-end"
          />
          <button>send</button>
        </form>
        {/* post option */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addimage.png"
              alt=""
              height={20}
              width={20}
              className=""
            />
            Photo
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addvideo.png"
              alt=""
              height={20}
              width={20}
              className=""
            />
            Video
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt=""
              height={20}
              width={20}
              className=""
            />
            Event
          </div>

          <div className="flex  justify-end items-center gap-2 cursor-pointer  ">
            <Image src="/poll.png" alt="" height={20} width={20} className="" />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
