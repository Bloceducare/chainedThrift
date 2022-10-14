import React from "react";
import Modal from "react-modal";
import clsx from "clsx";
import "./index.scss";

Modal.setAppElement("#root"); // this is for accessibility purpose. we want other page content to be hidden to assistive technology when this modal is opened
const AuthWrapper = ({ open, children, onClose, label }) => {
    return (
        <Modal
            closeTimeoutMS={300}
            isOpen={open}
            // onRequestClose={onClose}
            contentLabel={label}
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

export { AuthWrapper };

export default AuthWrapper;
