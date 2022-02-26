import React from "react";
const Backdrop = ({dismissModal}) => {
    return(
        <div className = "fixed inset-0 backdrop-blur-sm z-10" onClick = {dismissModal}></div>
    );
}
export default Backdrop;