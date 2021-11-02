import React, { useState } from 'react'
import Card from '../card/Card'
import Button from '../button/Button'
import './ErrorModal.css'

const ErrorModal = ({ title, message }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <div className='backdrop' />
      <Card classname='modal'>
        <header className='header'>
          <h2>{title}</h2>
        </header>
        <div className='content'>
          <p>{message}</p>
        </div>
        <footer className='actions'>
          <Button>OK</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
