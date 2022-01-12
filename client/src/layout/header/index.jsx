import React from 'react';
import logo from '../../assets/Vector.svg';
import HeaderButton from '../../components/buttons/HeaderButton';
// import { landingNav } from '../../data/data';
// import useTheme from '../../hooks/useTheme'


const Header = ({data}) => {
    // const { theme, changeTheme } = useTheme();
    return (
        <header className="bg-nav-dark flex justify-between rounded-b-lg items-center p-8 max-w-7xl m-auto h-12">
            <div className="flex items-center">
                <div className={`w-${42} bg-nav-dark h-${42} mx-2 rounded-full overflow-hidden p-1 shrink-0`}>
                    <img className="-rotate-12" src={logo} alt="web3brigde-logo" />
                </div>
                <div>
                    <h3 className="font-Montserrat font-extrabold text-xl uppercase text-white-1">Chained thrift</h3>
                </div>

            </div>
            <div className="flex items-center">
            <nav>
                < ul className="flex">
                  {data.map((item, index) => {
                        return (
                            <li key={index}><a className="font-Poppins  text-base  font-extrabold text-white-1 mr-24" href={item.link}>{item.value}</a></li>
                        )
                    })}
                </ul>
            </nav>
            <a href="!#"><HeaderButton>Launch App</HeaderButton></a>
            </div>
        </header>
    )
}

export default Header
