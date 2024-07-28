import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInformation = ({userId}:{userId:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 ">
        <div className='flex justify-between item-center font-medium'>
            <span className='text-gray-500'>User Information</span>
            <Link href="/" className="text-blue-500 text-xs ">
            See all
            </Link>
        </div>

        {/* BOTTOM */}
        <div className='flex flex-col gap-4 text-gray-500' >
            <div className='flex items-center gap-2'>
                <span className='text-xl text-black font-medium' >Tushar Gupta</span>
                <span className='text-sm'>@Tushuyrr</span>
            </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, delectus sapiente dicta dolore voluptatem iusto.
            </p>
            <div className='flex gap-2 items-center'>
                <Image src="/map.png" height={16} width={16} alt="" className=''></Image>
                <span>
                    Living in <b>Delhi</b>
                </span>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src="/school.png" height={16} width={16} alt="" className=''></Image>
                <span>
                    Went to <b>KCC ITM</b>
                </span>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src="/work.png" height={16} width={16} alt="" className=''></Image>
                <span>
                    works at <b>Apple Inc.</b>
                </span>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-2'>
                    <Image src="/link.png" alt='' height={16} width={16} className='cursor-pointer'></Image>
                    <Link href="/" className='text-blue-500 font-medium'>tushu.dev</Link>
                </div>
                <div className='flex items-center gap-2 '>
                    <Image src="/calender.png" height={16} width={16} alt='' ></Image>
                    <span>
                    Joined Nov 2024
                    </span>
                </div>
                
            </div>
            <button className='bg-blue-500 text-white cursor-pointer p-2 rounded-lg font-medium shadow-md'>
                Following
            </button>
            <span className='text-red-400 self-end text-xs cursor-pointer'>
                Block User
            </span>
        </div>


    </div>
  )
}

export default UserInformation