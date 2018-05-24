import React from 'react'

import HeaderNavItem from './HeaderNavItem'

const HeaderNavList = (props) => {
    const headerNavItems = props.headerNavLinks.map(item => {
        return (
            <li key={item.id} className="header-nav__item">
                <HeaderNavItem headerNavLinks={item}/>
            </li>
        )
    })
    return (
        <ul className="header-nav__list">
            {headerNavItems}
        </ul>
    )
}

export default HeaderNavList