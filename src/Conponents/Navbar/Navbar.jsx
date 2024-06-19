import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchicon from '../../assets/search_icon.svg'
import Bellicon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import careticon from '../../assets/caret_icon.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse By Language</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={searchicon} alt="" className='icons' />
                <p>Children</p>
                <img src={Bellicon} alt="" className='icons' />
                <div className="navbar-profile">
                    <img src={profile} alt="" className='profile' />
                    <img src={careticon} alt="" />
                    <div className="dropdown">
                        <p>signout of netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar