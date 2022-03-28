import React from 'react'
import Modal from 'react-modal';
import clsx from 'clsx';
import './index.scss'

Modal.setAppElement('#root'); // this is for accessibility purpose. we want other page content to be hidden to assistive technology when this modal is opened
const ModalWrapper = ({open, children, onClose, label}) => {
  return (
    <Modal
      closeTimeoutMS={300}
      isOpen = {open}
      onRequestClose = {onClose}
      contentLabel = {label}
      overlayClassName = "fixed inset-0 backdrop-blur-sm z-10"
      className = {clsx({"absolute top-1/2 left-1/2 w-72 md:w-96  -translate-x-1/2 -translate-y-full opacity-0 bg-blue-7 dark:bg-gray-4 p-6 rounded-3xl -z-20 modal":true, "show-modal": open, })}
    >
      {children}
    </Modal>
  )
}

export {ModalWrapper};

export default ModalWrapper;