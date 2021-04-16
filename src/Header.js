import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/counter/userSlice';
import { auth } from './Firebase';

function Header() {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="LinkedIn logo" />

                <div className="header__search">
                    <SearchIcon className="header__search__icon"/>
                    <input type="text" placeholder="Search" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption className="header__right__icon" Icon={HomeIcon} title="Home" />
                <HeaderOption className="header__right__icon" Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption className="header__right__icon" Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption className="header__right__icon" Icon={ChatIcon} title="Messaging" />
                <HeaderOption className="header__right__icon" Icon={NotificationsIcon} title="Jobs" />
                <HeaderOption className="header__right__icon" onClick={logoutOfApp} avatar={true} title= {!user ? "Me" : "Logout"} />
            </div>
        </div>
    )
}

export default Header
