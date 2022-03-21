import React from 'react';

function Switch(props) {
    return (
        <div
            className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${props.theme === 'dark'?'bg-white-1' :'bg-purple-1'}  rounded-full p-1 cursor-pointer`}
            onClick={props.action}
        >
            {/* Switch */}
            <div
                className={`md:w-6 md:h-6 h-5 ${props.theme === 'dark'? 'bg-purple-1': 'bg-white-1' } w-5 rounded-full shadow-md transform ${props.className}`}
            ></div>
        </div>
    )
}

export default Switch
