import React from 'react'
import FriendRequest from './FriendRequest'
import Birthday from './Birthday'
import Avertisement from './Avertisement'

const RightMenu = ({userid}:{userid:string}) => {
  return (
    <div className='flex flex-col gap-4'>
      <FriendRequest></FriendRequest>
      <Birthday></Birthday>
      <Avertisement size='md'></Avertisement>

    </div>
  )
}

export default RightMenu