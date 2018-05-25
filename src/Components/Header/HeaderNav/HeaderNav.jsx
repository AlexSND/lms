import React from 'react'

import './HeaderNav.css'

import HeaderNavList from './HeaderNavList';

const HeaderNav = (props) => {
    return (
        <nav className="header-nav">
            <div className="main-wrapper main-wrapper_flex">
                <img
                    src={process.env.PUBLIC_URL + '/img/main-logo.svg'}
                    className="header-nav__logo"
                    alt="main-logo"
                />
                <HeaderNavList
                    headerNavLinks={props.headerNavLinks}
                />
            </div>
        </nav>
    )
}

export default HeaderNav