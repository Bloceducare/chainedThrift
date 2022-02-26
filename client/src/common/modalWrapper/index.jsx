import React from 'react'
import {CgCloseR} from 'react-icons/cg'

const ModalWrapper = ({childeren, title, dismiss}) => {
  return (
    <div className = "fixed inset-0 backdrop-blur-sm z-10" onClick = {dismiss}>
      <div className="modal-head">
        <h3 className="">
          {Boolean(title) && title}
        </h3>
        <CgCloseR className = "cursor-pointer" onClick = {dismiss}/>
      </div>
      <div className="modal-body">
        
      </div>
    </div>
  )
}

export default ModalWrapper