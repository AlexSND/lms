import React from 'react'

import './LiveClass.css'

import LinkButton from '../LinkButton/LinkButton'

const LiveClass = (props) => {
    return (
        <div className="live-class">
            <div className="main-wrapper main-wrapper_flex">
                <div className="live-class__left-col">
                    <span className="live-class__pre-title">
                        Welcome to
                    </span>
                    <h3 className="live-class__title">
                        Live Class
                    </h3>
                    <p className="live-class__body-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <LinkButton text='View all classes' invert/>
                </div>
                <div className="live-class__right-col">
                
                </div>                
            </div>
        </div>
    )
}

export default LiveClass