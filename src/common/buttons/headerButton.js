import React from 'react'

function HeaderButton(props) {
    return (
        <button className="border-purple-1 dark:bg-dark-1 bg-white-1 text-purple-1 cursor-pointer outline  outline-1 rounded-lg px-6 py-1" onClick={props.action}>
            {props.children}
        </button>
    )
}

export default HeaderButton
