import React from 'react'
import useTheme from '../../hooks/useTheme'


const Header = () => {
    const { theme, changeTheme } = useTheme();
    return (
        <header onClick={changeTheme}>
            App header --- {theme}
        </header>
    )
}

export default Header
