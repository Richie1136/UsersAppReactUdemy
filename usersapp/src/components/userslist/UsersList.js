import React from 'react'
import Card from '../card/Card'
import './UsersList.css'

const UsersList = ({ users }) => {
  return (
    <Card classname='users'>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList

