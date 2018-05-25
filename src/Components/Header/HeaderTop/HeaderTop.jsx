import React from 'react'

import './HeaderTop.css'

import phoneIcon from './phone-icon.svg'
import mailIcon from './mail-icon.svg'
import loginIcon from './login-icon.svg'
import registerIcon from './register-icon.svg'

import HeaderTopLink from './HeaderTopLink';

const HeaderTop = (props) => {
    return (
        <div className="header-top main-wrapper">
            <div className="header-top__contact">
                <HeaderTopLink link='tel:1-800-633-3469' text='1-800-633-3469' icon={phoneIcon} />
                <HeaderTopLink link='mailto:mailedu@kado.com' text='mailedu@kado.com'icon={mailIcon} />
            </div>
            <div className="header-top__user">
                <HeaderTopLink link='' text='Register' icon={loginIcon} />
                <HeaderTopLink link='' text='Login' icon={registerIcon} />
            </div>
        </div>
        
    )
}

export default HeaderTop