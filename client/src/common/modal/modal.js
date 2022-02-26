import React from 'react'
import ReactDOM from 'react-dom';

const Backdrop = (props) =>{
    return(
        <div onClick={props.onClose} className="fixed w-full h-screen bg-nav-dark z-40 backdrop-blur-sm"></div>
    )
}


const Overlay = (props) =>{
    return(
        <div className="absolute z-50 w-full  h-96  p-2 top-8">
            <div className="over-flow-hidden ">{props.children}</div>
        </div>
    )
}

function Modal(props) {
    return (
        <React.Fragment>
             {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<Overlay onClose={props.onClose}>{props.children}</Overlay>, document.getElementById('overlay'))}
        </React.Fragment>
    )
}

export default Modal
