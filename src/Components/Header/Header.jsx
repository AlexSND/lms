import React from 'react'

import HeaderTop from './HeaderTop/HeaderTop'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderBody from './HeaderBody/HeaderBody'

const Header = (props) => {
    return (
        <header className="header">
            <HeaderTop 
                phoneIcon={props.phoneIcon}
                mailIcon={props.mailIcon}
                loginIcon={props.loginIcon}
                registerIcon={props.registerIcon}
            />
            <HeaderNav
                mainLogo={props.mainLogo}
                headerNavLinks={props.headerNavLinks}
            />
            <HeaderBody />
        </header>
    )
}
    
export default Header