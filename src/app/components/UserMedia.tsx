import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMedia = ({userId}:{userId:string}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 ">
    <div className='flex justify-between item-center font-medium'>
        <span className='text-gray-500'>User Media</span>
        <Link href="/" className="text-blue-500 text-xs ">
        See all
        </Link>
    </div>
    {/* BOTTOM     */}
     <div className='flex gap-4 justify-between flex-wrap'>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        <div className='relative w-1/5 h-24'>
            <Image src="" alt='' fill className='objectfi;-cover rounded-md' ></Image>
        </div>
        
     </div>
    </div>
  )
}

export default UserMedia