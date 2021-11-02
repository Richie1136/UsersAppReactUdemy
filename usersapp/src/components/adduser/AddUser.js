import React, { useState } from 'react'
import Card from '../card/Card'
import './AddUser.css'
import Button from '../button/Button'
import ErrorModal from '../modal/ErrorModal'

const AddUser = ({ onadduser }) => {
  const [username, setUserName] = useState('')
  const [age, setAge] = useState(0)
  const [error, setError] = useState()

  const addUserSubmit = (e) => {
    e.preventDefault()
    if (username.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name' })
      return
    }
    if (+age < 0) {
      setError({ title: 'Invalid age', message: 'Please enter a valid age' })
      return
    }
    onadduser(username, age)
    setUserName('')
    setAge(0)
  }
  const usernameChange = (e) => {
    setUserName(e.target.value)
  }
  const ageChange = (e) => {
    setAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }
  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onerrorHandler={errorHandler} />}
      <Card classname='input'>
        <form onSubmit={addUserSubmit}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={username} onChange={usernameChange} />
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' value={age} onChange={ageChange} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
