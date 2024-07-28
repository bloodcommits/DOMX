import React from 'react'
import FriendRequest from './FriendRequest'
import Birthday from './Birthday'
import Avertisement from './Avertisement'
import UserInformation from './UserInformation'
import UserMedia from './UserMedia'

const RightMenu = ({userid}:{userid?:string}) => {
  return (
    <div className='flex flex-col gap-4'>
      {userid?<>
      <UserInformation userId={userid}/>
      <UserMedia userId={userid}/>
      </>:null}
      <FriendRequest></FriendRequest>
      <Birthday></Birthday>
      <Avertisement size='md'></Avertisement>

    </div>
  )
}

export default RightMenu