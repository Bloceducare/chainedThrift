import React from "react";
import Modal from "react-modal";
import clsx from "clsx";
import "./index.scss";
import { useState } from "react";

Modal.setAppElement("#root"); // this is for accessibility purpose. we want other page content to be hidden to assistive technology when this modal is opened
const LoaderWrapper = ({ children}) => {
    const [open,] = useState(true)
    return (
        <Modal
            closeTimeoutMS={300}
            isOpen={open}
            // onRequestClose={setOpen(!open)}
            overlayClassName="fixed inset-0 backdrop-blur-sm z-10"
            className={clsx({
                "modal show-modal": true,
                "hide-modal": !open,
            })}
        >
            {children}
        </Modal>
    );
};

export { LoaderWrapper };

export default LoaderWrapper;
