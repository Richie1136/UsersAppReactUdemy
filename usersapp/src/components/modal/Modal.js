import React, { useState } from 'react'
import Card from '../card/Card'
import Button from '../button/Button'
import './Modal.css'

const Modal = ({ title, message }) => {
  const [isModalOpe, setIsModalOpen] = useState(false)
  return (
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
  )
}

export default Modal
