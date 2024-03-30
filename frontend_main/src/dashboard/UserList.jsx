import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
  console.log(users)
  return (
    //grid grid-cols-2 gap-4 h-full w-full
    <div className="h-full w-full">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList
