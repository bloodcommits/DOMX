import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequest = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 ' >
        {/* top */}
        <div className='flex items-center justify-between font-medium flex-1'>
<span className='text-gray-500'>Friend Request</span>
<Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>

        {/* bottom */}

        <div className=' flex items-center justify-between'>
<div className='flex items-center gap-4'>
    <Image  className='w-10 h-10 rounded-full object-cover' src="/emoji.png" alt="" height={40} width={40} ></Image>
    <span className='font-semibold'>Tushar</span>
</div>
<div className='flex gap-3 justify-end'>
<Image  className='cursor-pointer' src="/accept.png" alt="" height={20} width={20} ></Image>
<Image  className='cursor-pointer' src="/reject.png" alt="" height={20} width={20} ></Image>

</div>


        </div>

        <div className=' flex items-center justify-between'>
<div className='flex items-center gap-4'>
    <Image  className='w-10 h-10 rounded-full object-cover' src="/emoji.png" alt="" height={40} width={40} ></Image>
    <span className='font-semibold'>Tushar</span>
</div>
<div className='flex gap-3 justify-end'>
<Image  className='cursor-pointer' src="/accept.png" alt="" height={20} width={20} ></Image>
<Image  className='cursor-pointer' src="/reject.png" alt="" height={20} width={20} ></Image>

</div>


        </div>

        <div className=' flex items-center justify-between'>
<div className='flex items-center gap-4'>
    <Image  className='w-10 h-10 rounded-full object-cover' src="/emoji.png" alt="" height={40} width={40} ></Image>
    <span className='font-semibold'>Tushar</span>
</div>
<div className='flex gap-3 justify-end'>
<Image  className='cursor-pointer' src="/accept.png" alt="" height={20} width={20} ></Image>
<Image  className='cursor-pointer' src="/reject.png" alt="" height={20} width={20} ></Image>

</div>


        </div>

        <div className=' flex items-center justify-between'>
<div className='flex items-center gap-4'>
    <Image  className='w-10 h-10 rounded-full object-cover' src="/emoji.png" alt="" height={40} width={40} ></Image>
    <span className='font-semibold'>Tushar</span>
</div>
<div className='flex gap-3 justify-end'>
<Image  className='cursor-pointer' src="/accept.png" alt="" height={20} width={20} ></Image>
<Image  className='cursor-pointer' src="/reject.png" alt="" height={20} width={20} ></Image>

</div>


        </div>

    </div>
  )
}

export default FriendRequest