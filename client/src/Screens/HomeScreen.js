import React from 'react'

const HomeScreen = ({ user }) => {
  return (
    <div>
    <h1>{user?.fullname}</h1>
    </div>
  )
}

export default HomeScreen