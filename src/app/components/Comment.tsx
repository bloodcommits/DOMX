import Image from 'next/image'
import React from 'react'

const Comment = () => {
  return (
    <div>
        {/* writing */}
        <div className='flex items-center gap-4'>
            <Image src="/emoji.png" alt='' height={32} width={32} className='w-8 h-8 rounded-full' />
            <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full '>
                <input type="text" placeholder='Comment' className='bg-transparent outline-none flex-1' />
                <Image src="/emoji.png" alt="" className='cursor-pointer' height={16} width={16}/>
            </div>

        </div>

        {/* comments */}
        <div className=''>
            {/* comment */}
            <div className='flex justify-between gap-2 mt-6'>
                {/* avatar */}
                <Image src="/emoji.png" alt='' height={40} width={40} className='w-8 h-8 rounded-full' />
                {/* description */}
                <div className='flex flex-1 flex-col gap-2'>
<span className='font-medium'>Tushar</span>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat repellendus earum, blanditiis ipsam laudantium vitae culpa consequuntur perspiciatis doloribus.
</p>
<div className='flex gap-8 text-sm text-gray-500 items-center mt-2'>
    <div className='flex items-center gap-4'>
    <Image src="/like.png" alt='' height={16} width={16} className='cursor-pointer w-4 h-4'></Image> 
    <span className='text-gray-400'>|</span>
    <span className='text-gray-400'>123 likes</span>
    </div>
    <div>
        reply
    </div>
</div>

                </div>
                {/* icon */}
                <Image src="/more.png" alt='' height={16} width={16} className='cursor-pointer w-4 h-4'></Image>

            </div>

        </div>
    </div>
  )
}

export default Comment