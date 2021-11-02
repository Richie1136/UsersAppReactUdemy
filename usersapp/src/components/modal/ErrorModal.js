import React from 'react'
import Card from '../card/Card'
import Button from '../button/Button'
import './ErrorModal.css'
import ReactDOM from 'react-dom'

const Backdrop = ({ onerrorHandler }) => {
  return <div className='backdrop' onClick={onerrorHandler} />
}

const ModalOverlay = ({ title, message, onerrorHandler }) => {
  return <Card classname='modal'>
    <header className='header'>
      <h2>{title}</h2>
    </header>
    <div className='content'>
      <p>{message}</p>
    </div>
    <footer className='actions'>
      <Button onClick={onerrorHandler}>OK</Button>
    </footer>
  </Card>
}

const ErrorModal = ({ title, message, onerrorHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onerrorHandler={onerrorHandler} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={title} message={message} onerrorHandler={onerrorHandler} />, document.getElementById('modal-root'))}
    </>
  )
}

export default ErrorModal
