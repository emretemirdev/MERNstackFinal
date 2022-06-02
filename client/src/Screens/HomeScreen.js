import React from 'react'

const HomeScreen = ({ user }) => {
  return (
    <div>{user?.fullname}</div>
  )
}

export default HomeScreen