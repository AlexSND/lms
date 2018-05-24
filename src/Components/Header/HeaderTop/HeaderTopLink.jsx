import React from 'react'

const HeaderTopLink = (props) => {
    const style = { backgroundImage: `url(${props.icon})`}
    
    return (
        <a href={props.link} className="header-top__link" style={style}>
            {props.text}
        </a>
    )
}

export default HeaderTopLink