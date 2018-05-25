import React from 'react'

import './LinkButton.css'

const LinkButton = (props) => {
    return (
        <a href={props.link} className={props.invert ? "link-button link-button_white" : "link-button"}>
            {props.text}
        </a>
    )
}

export default LinkButton