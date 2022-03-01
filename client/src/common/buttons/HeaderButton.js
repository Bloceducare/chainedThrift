import React from 'react'

function HeaderButton(props) {
    return (
        <button className="border-purple-1 text-purple-1 cursor-pointer outline outline-offset-2 outline-1 rounded-lg px-6 py-1" onClick={props.action}>
            {props.children}
        </button>
    )
}

export default HeaderButton
