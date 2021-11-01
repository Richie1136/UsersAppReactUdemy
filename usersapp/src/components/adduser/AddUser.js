import React, { useState } from 'react'
import Card from '../card/Card'
import './AddUser.css'

const AddUser = () => {
  const [username, setUserName] = useState('')
  const [age, setAge] = useState(0)
  const addUserSubmit = (e) => {
    e.preventDefault()
  }
  const usernameChange = (e) => {
    setUserName(e.target.value)
  }
  const ageChange = (e) => {
    setAge(e.target.value)
  }
  return (
    <Card classname='input'>
      <form onSubmit={addUserSubmit}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={username} onChange={usernameChange} />
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' value={age} onChange={ageChange} />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  )
}

export default AddUser
