import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='bg-white shadow-md gap-4 justify-center items-center rounded-lg flex text-sm p-4'>
      <Image src="" alt='' height={12} width={12} className='w-12 h-12 object-cover rounded-full ring-2' />

      <div className='flex-1'>
       
        <div className=' flex item-center fle justify-center gap-4'>
 {/* textarea */}
          <textarea placeholder='Add Post' className='bg-slate-100 rounded-lg flex-1 p-2 outline-0' name="" id=""></textarea>
{/* emoji */}
          <Image src="/emoji.png" alt='' height={6} width={6} className='w-5 h-5 object-cover rounded-full ring-2 self-end' />


        </div>
        {/* post option */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>

          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addimage.png" alt='' height={20} width={20} className='' />
          Photo
          </div>

          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addvideo.png" alt='' height={20} width={20} className='' />
          Video
          </div>

          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addevents.png" alt='' height={20} width={20} className='' />
          Event
          </div>

          <div className='flex  justify-end items-center gap-2 cursor-pointer  '>
          <Image src="/poll.png" alt='' height={20} width={20} className='' />
          Poll
          </div>

        </div>

      </div>


    </div>
  )
}

export default AddPost