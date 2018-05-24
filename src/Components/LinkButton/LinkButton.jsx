import React from 'react'

import './LinkButton.css'

const LinkButton = (props) => {
    return (
        <a href={props.link} className="link-button">
            {props.text}
        </a>
    )
}

export default LinkButton