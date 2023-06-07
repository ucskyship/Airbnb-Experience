import React from "react";
import logo from '../../assets/airbnb.svg'
import './Navbar.css'

const Navbar = () => {
    return(
        <div className={'navbar'}>
            <img className={'logo'} src={logo} alt={'airbnb'}/>
        </div>
    )
}

export default Navbar;