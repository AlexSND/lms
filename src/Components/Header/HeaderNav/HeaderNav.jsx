import React from 'react'

import './HeaderNav.css'

import HeaderNavList from './HeaderNavList';

const HeaderNav = (props) => {
    return (
        <nav className="header-nav">
            <div className="main-wrapper main-wrapper_flex">
                <img src={props.mainLogo} alt="main-logo" className="header-nav__logo"/>
                <HeaderNavList headerNavLinks={props.headerNavLinks}/>
            </div>
        </nav>
    )
}

export default HeaderNav