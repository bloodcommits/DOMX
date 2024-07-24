import Image from "next/image"
import Comment from "./Comment"

const Post=()=>{
    return(
        <div className="flex flex-col gap-4">
        <div className=" flex items-center justify-between">
            <div className="flex items-center gap-4">
            <Image src="" alt="" className="w-10 h-10 rounded-full ring-1" width={40} height={40} />
            <span className="font-medium text-sm">
                Tushar
            </span>
            </div>
            <Image src="/more.png" alt=""width={16} height={16} />
        </div>
        {/* image and description */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src="" alt="" fill className="object-cover rounded-md" />
            </div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, labore.
            </p>
        </div>
        {/* Interactions  */}

        <div className="flex  items-center justify-between text-sm my-4" >
            <div className="flex gap-8">
            <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl ">
            <Image src="/like.png" alt="" className="cursor-pointer" height={16} width={16} />
            <span className="text-gray-400">
                |
            </span>
            <span className="text-gray-400">
                123
                <span className="hidden md:inline"> like
            </span>
            </span>
            </div>
            <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl ">
            <Image src="/comment.png" alt="" className="cursor-pointer" height={16} width={16} />
            <span className="text-gray-400">
                |
            </span>
            <span className="text-gray-400">
                123
                <span className="hidden md:inline"> Comment
            </span>
            </span>
            </div>
            </div>

            <div>
            <div className=" flex items-center gap-4 bg-slate-100 p-2 rounded-xl ">
            <Image src="/share.png" alt="" className="cursor-pointer" height={16} width={16} />
            <span className="text-gray-400">
                |
            </span>
            <span className="text-gray-400">
                123
                <span className="hidden md:inline"> Share
            </span>
            </span>
            </div>
            </div>
        </div>
<Comment/>
        </div>
    )
}
export  default Post