import React, { useState, useRef } from 'react'
import Card from '../card/Card'
import './AddUser.css'
import Button from '../button/Button'
import ErrorModal from '../modal/ErrorModal'

const AddUser = ({ onadduser }) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const [error, setError] = useState()

  const addUserSubmit = (e) => {
    e.preventDefault()
    const Name = nameInputRef.current.value
    const Age = ageInputRef.current.value
    if (Name.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name' })
      return
    }
    if (+Age < 0) {
      setError({ title: 'Invalid age', message: 'Please enter a valid age' })
      return
    }
    onadduser(Name, Age)
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
          <input id='username' type='text'
            ref={nameInputRef} />
          <label htmlFor='age'>Age</label>
          <input id='age' type='number'
            ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
