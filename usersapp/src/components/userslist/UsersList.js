import React from 'react'
import AddUser from '../adduser/AddUser'
import Card from '../card/Card'
import './UsersList.css'

const UsersList = ({ users }) => {
  return (
    <Card classname='users'>
      <ul>
        {users.map((user) => {
          return <AddUser key={user.id} username={user.username} age={user.age} years old />
        })}
      </ul>
    </Card>
  )
}

export default UsersList

