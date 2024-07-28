import Feed from '@/app/components/Feed'
import LeftMenu from '@/app/components/LeftMenu'
import RightMenu from '@/app/components/RightMenu'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-6 p-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type='profile'/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
        <div className=' flex flex-col items-center justify-center'>
          <div className='w-full h-64 relative'>
            <Image src="" alt=''  fill className='object-cover rounded-md' ></Image>
            <Image src="" alt='' className='w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white' width={128} height={128} ></Image>
          </div>
          <h1 className='mt-20 mb-4 text-2xl font-medium'>
            Tushar Gupta
          </h1>
          <div className='flex items-center justify-center gap-12 mb-4'>
            <div className="flex flex-col items-center">
              <span className='font-medium '>123</span>
              <span className='text-sm'>Posts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className='font-medium '>1.2K</span>
              <span className='text-sm'>followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className='font-medium '>1.6K</span>
              <span className='text-sm'>following</span>
            </div>

          </div>

        </div>
        <Feed/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userid='test'/>
      </div>

    </div>

  )
}

export default page