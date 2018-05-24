import React from 'react'

const HeaderNavItem = (props) => {
    return (
            <a href={`#${props.headerNavLinks.anchorId}`}className="header-nav__link">
                {props.headerNavLinks.text}
            </a>
    )
}

export default HeaderNavItem