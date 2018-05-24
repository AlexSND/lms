import React from 'react'

import './HeaderTop.css'

import HeaderTopLink from './HeaderTopLink';

const HeaderTop = (props) => {
    return (
        <div className="header-top main-wrapper">
            <div className="header-top__contact">
                <HeaderTopLink link='tel:1-800-633-3469' text='1-800-633-3469' icon={props.phoneIcon} />
                <HeaderTopLink link='mailto:mailedu@kado.com' text='mailedu@kado.com'icon={props.mailIcon} />
            </div>
            <div className="header-top__user">
                <HeaderTopLink link='' text='Register' icon={props.loginIcon} />
                <HeaderTopLink link='' text='Login' icon={props.registerIcon} />
            </div>
        </div>
        
    )
}

export default HeaderTop